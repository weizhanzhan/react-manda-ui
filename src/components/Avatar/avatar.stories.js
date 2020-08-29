import React from 'react'
import face1 from 'assets/images/avatar1.jpg'

import Avatar from '.'
export default {
  title:'Avatar',
  component:Avatar
}

export const Default = ()=>{
  return <Avatar src={face1}/>
}

export const Sizes = ()=>{
  return(
    <div className="row-elements"> 
       <Avatar size="48px" src={face1}/>
       <Avatar size="56px" src={face1}/>
       <Avatar size="64px" src={face1}/>
       <Avatar size="72px" src={face1}/>
    </div>
  )
}

export const WithStatus = ()=>{
  return(
    <div className="row-elements"> 
       <Avatar src={face1} status="online"/>
       <Avatar src={face1} status="offline"/>
       <Avatar src={face1} size="72px" statusIconSize="16px" status="offline"/>
    </div>
  )
}