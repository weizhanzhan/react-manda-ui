import React from 'react'
import StyledIcon from './style'
import PropTypes from 'prop-types'

function Icon({children, ...rest}) {
  return (
    <StyledIcon {...rest}>
      {children}
    </StyledIcon>
  )
}

Icon.propTypes = {
  children:PropTypes.any
}

export default Icon


