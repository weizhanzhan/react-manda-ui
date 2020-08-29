import React from 'react'
import Badge from "."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

export default {
  title:"Badge",
  component:Badge
}

export const Default = () => <Badge count={5}></Badge>

export const DotVariant = () =>{
  return(
    <Badge show count={5}>
      <FontAwesomeIcon icon={ faCommentDots} style={{fontSize:"24px"}} ></FontAwesomeIcon>
    </Badge>
  )
}

