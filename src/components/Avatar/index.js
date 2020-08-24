import React from 'react'
import face1 from '../../assets/images/avatar1.jpg'
import StyledAvatar, { StatusIcon ,AvatarClip,AvatarImage} from './style'
// import PropTypes from 'prop-types'

function Avatar(props) {
  return (
    <StyledAvatar>
      <StatusIcon></StatusIcon>
      <AvatarClip>
        <AvatarImage src={face1} alt="" />
      </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {

}

export default Avatar


