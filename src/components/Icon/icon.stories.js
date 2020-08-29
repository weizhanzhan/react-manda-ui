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