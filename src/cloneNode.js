import { createImage, toArray, svgToDataURL } from './utils'
import clonePseudoElements from './clonePseudoElements'


function cloneSingleNode(nativeNode) {
  if (nativeNode instanceof HTMLCanvasElement) {
    return createImage(nativeNode.toDataURL())
  } else if (nativeNode.tagName && nativeNode.tagName.toLowerCase() === 'svg') {
    return Promise.resolve(nativeNode)
      .then(svgToDataURL)
      .then(createImage)
  }

  return Promise.resolve(nativeNode.cloneNode(false))
}

function cloneChildren(
  nativeNode,
  clonedNode,
) {
  const children = toArray(nativeNode.childNodes)
  if (children.length === 0) {
    return Promise.resolve(clonedNode)
  }

  // clone children in order
  return children.reduce((done, child) => done
    .then(() => cloneNode(child)) // eslint-disable-line
    .then((clonedChild) => {
      if (clonedChild) {
        clonedNode.appendChild(clonedChild)
      }
    }), Promise.resolve())
    .then(() => clonedNode)
}

function cloneCssStyle(
  nativeNode,
  clonedNode,
) {
  const source = window.getComputedStyle(nativeNode)
  const target = clonedNode.style

  if (source.cssText) {
    target.cssText = source.cssText
    target.font = source.font
  } else {
    toArray(source).forEach((name) => {
      target.setProperty(
        name,
        source.getPropertyValue(name),
        source.getPropertyPriority(name),
      )
    })
  }
}

function cloneInputValue(
  nativeNode,
  clonedNode,
) {
  if (nativeNode instanceof HTMLTextAreaElement) {
    clonedNode.innerHTML = nativeNode.value
  }

  if (nativeNode instanceof HTMLInputElement) {
    clonedNode.setAttribute('value', nativeNode.value)
  }
}

function decorate(
  nativeNode,
  clonedNode,
) {
  if (!(clonedNode instanceof Element)) {
    return clonedNode
  }

  return Promise.resolve()
    .then(() => cloneCssStyle(nativeNode, clonedNode))
    .then(() => clonePseudoElements(nativeNode, clonedNode))
    .then(() => cloneInputValue(nativeNode, clonedNode))
    .then(() => clonedNode)
}

export default function cloneNode(
  domNode,
  isRoot,
) {
  if (!isRoot) {
    return Promise.resolve()
  }

  return Promise.resolve(domNode)
    .then(cloneSingleNode)
    .then(clonedNode => cloneChildren(domNode, clonedNode))
    .then(clonedNode => decorate(domNode, clonedNode))
}
