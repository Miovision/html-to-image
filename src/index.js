import cloneNode from './cloneNode'
import embedWebFonts from './embedWebFonts'
import embedImages from './embedImages'
import createSvgDataURL from './createSvgDataURL'
import {
  createImage,
  delay,
  canvasToBlob,
  getNodeWidth,
  getNodeHeight,
  getPixelRatio,
} from './utils'

export function toSvgDataURL(
  domNode
) {
  const width = getNodeWidth(domNode)
  const height = getNodeHeight(domNode)

  return cloneNode(domNode, true)
    .then(clonedNode => embedWebFonts(clonedNode))
    .then(clonedNode => embedImages(clonedNode))
    .then(clonedNode => createSvgDataURL(clonedNode, width, height))
};

export function toCanvas(
  domNode
) {
  return toSvgDataURL(domNode)
    .then(createImage)
    .then(delay(100))
    .then((image) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      const width = getNodeWidth(domNode)
      const height = getNodeHeight(domNode)
      const ratio = getPixelRatio(context)

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = width
      canvas.style.height = height
      context.scale(ratio, ratio)

      context.drawImage(image, 0, 0)

      return canvas
    })
};

export function toPixelData(
  domNode
) {
  const width = getNodeWidth(domNode)
  const height = getNodeHeight(domNode)

  return toCanvas(domNode)
    .then(canvas => (
      canvas.getContext('2d').getImageData(0, 0, width, height).data
    ))
};

export function toPng(
  domNode) {
  return toCanvas(domNode).then(canvas => (
    canvas.toDataURL()
  ))
};

export function toJpeg(
  domNode
) {
  return toCanvas(domNode).then(canvas => (
    canvas.toDataURL('image/jpeg', 1)
  ))
};

export function toBlob(
  domNode,
) {
  return toCanvas(domNode).then(canvasToBlob)
};

export default {
  toSvgDataURL,
  toCanvas,
  toPixelData,
  toPng,
  toJpeg,
  toBlob,
};
