import { toArray, isDataUrl, toDataURL, getMimeType } from './utils'
import getBlobFromURL from './getBlobFromURL'
import embedResources from './embedResources'


function embedBackground(
  clonedNode
) {
  const background = clonedNode.style.getPropertyValue('background')
  if (!background) {
    return Promise.resolve(clonedNode)
  }

  return Promise.resolve(background)
    .then(cssString => embedResources(cssString, null))
    .then((cssString) => {
      clonedNode.style.setProperty(
        'background',
        cssString,
        clonedNode.style.getPropertyPriority('background'),
      )

      return clonedNode
    })
}

function embedImageNode(
  clonedNode
) {
  if (!(clonedNode instanceof HTMLImageElement) || isDataUrl(clonedNode.src)) {
    return Promise.resolve(clonedNode)
  }

  return Promise.resolve(clonedNode.src)
    .then(url => getBlobFromURL(url))
    .then(data => toDataURL(data, getMimeType(clonedNode.src)))
    .then(dataURL => new Promise(((resolve, reject) => {
      clonedNode.onload = resolve
      clonedNode.onerror = reject
      clonedNode.src = dataURL
    })))
    .then(() => clonedNode, () => clonedNode)
}

function embedChildren(
  clonedNode
) {
  const children = toArray(clonedNode.childNodes)
  const deferreds = children.map(child => embedImages(child)) // eslint-disable-line

  return Promise.all(deferreds).then(() => clonedNode)
}

export default function embedImages(
  clonedNode
) {
  if (!(clonedNode instanceof Element)) {
    return Promise.resolve(clonedNode)
  }

  return Promise.resolve(clonedNode)
    .then(node => embedBackground(node))
    .then(node => embedImageNode(node))
    .then(node => embedChildren(node))
}
