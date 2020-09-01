import React from 'react'
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import PropTypes from 'prop-types'
import Badge from 'components/Badge'
import profileImage from 'assets/images/face-male-1.jpg'
import Avatar from 'components/Avatar'
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from '@fortawesome/free-solid-svg-icons'
import "styled-components/macro"
function NavBar({children, ...rest}) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online"></Avatar>
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        <MenuItem icon={faUsers}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem icon={faCog} css={`align-self:end`}></MenuItem>
      </MenuItems>
    </StyledNavBar>
  )
}

function MenuItem({ icon,active,showBadge,...rest}){
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {
}

export default NavBar
export {
  MenuItem
}


