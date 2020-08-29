import React from 'react'
import StyledBadge, { Count } from './style'
import PropTypes from 'prop-types'
/**
 * @param {String} variant -用来表示是否给children加上右上角的原点，如果没有就展示count数量
 * @param {Boolean} showZero - count为0是否显示徽章
 */
function Badge({children,show = false,count= 0, showZero, ...rest}) {
  return (
    <StyledBadge variant={ children?'dot':'default'} show = {show} count={count} showZero={showZero} {...rest}>
      {children|| <Count>{count}</Count>}
    </StyledBadge>
  )
}

Badge.propTypes = {
  children:PropTypes.any,
  show:PropTypes.bool,
  showZero:PropTypes.bool,
  count:PropTypes.number
}

export default Badge


