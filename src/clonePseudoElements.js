import { toArray, uuid } from './utils'


function formatCssText(style) {
  const content = style.getPropertyValue('content')
  return `${style.cssText} content: ${content};`
}

function formatCssProperties(style) {
  return toArray(style).map((name) => {
    const value = style.getPropertyValue(name)
    const priority = style.getPropertyPriority(name)

    return `${name}: ${value}${priority ? ' !important' : ''};`
  }).join(' ')
}

function getPseudoElementStyle(
  className,
  pseudo,
  style,
) {
  const selector = `.${className}:${pseudo}`
  const cssText = style.cssText ? formatCssText(style) : formatCssProperties(style)

  return document.createTextNode(`${selector}{${cssText}}`)
}

function clonePseudoElement(
  nativeNode,
  clonedNode,
  pseudo,
) {
  const style = window.getComputedStyle(nativeNode, pseudo)
  const content = style.getPropertyValue('content')

  if (content === '' || content === 'none') {
    return
  }

  const className = uuid()
  const styleElement = document.createElement('style')

  styleElement.appendChild(getPseudoElementStyle(className, pseudo, style))

  clonedNode.className = `${clonedNode.className} ${className}`
  clonedNode.appendChild(styleElement)
}

export default function clonePseudoElements(
  nativeNode,
  clonedNode,
) {
  [':before', ':after'].forEach(pseudo => clonePseudoElement(nativeNode, clonedNode, pseudo))
}
