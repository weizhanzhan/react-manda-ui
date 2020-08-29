import  { css } from 'styled-components'
/**
 * @description 通用的圆形样式
 * @param {String} color 
 * @param {String} size 
 */
export const circle = (color,size="8px") => css` 
  width:${size};
  height:${size};
  border-radius:50%;
  background-color:${color};
`