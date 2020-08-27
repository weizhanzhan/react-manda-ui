import React from 'react'
import StyledAvatar, { StatusIcon ,AvatarClip,AvatarImage} from './style'
import PropTypes from 'prop-types'

function Avatar({src,size="48px",status,statusIconSize = "8px",...rest}) {
  return (
    <StyledAvatar {...rest}>
      { status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src:PropTypes.string.isRequired,
  size:PropTypes.string,
  status:PropTypes.oneOf(['online','offline']),
  statusIconSize:PropTypes.string
}

export default Avatar


