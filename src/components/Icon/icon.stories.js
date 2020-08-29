import React from 'react'
import Icon from "."
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'

export default {
  title:"Icon",
  component:Icon
}

export const Default = () => <Icon icon={SmileIcon}></Icon>

export const CustomColor = () => <Icon color="#eeeeee" icon={SmileIcon}></Icon>


export const CustomSize = () => <Icon height={48} width={48} icon={SmileIcon}></Icon>

export const FontAwesome = () =>{
  return <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
}
export const FontAwesomeColor = () =>{
  return <FontAwesomeIcon icon={faCommentDots} style={{color:'red'}}></FontAwesomeIcon>
}
export const FontAwesomeSize = () =>{
  return (
   <div>
      <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'24px'}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'36px'}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'48px'}}></FontAwesomeIcon>
   </div>
  )
}