import styled, { css } from 'styled-components'
const circleMixinFunc = color => css`
  content:"";
  position:absolute;
  display:block;
  width:8px;
  height:8px;
  border-radius:50%;
  background-color:${color};
`
const StyledAvatar = styled.div`
  position:relative
`
const StatusIcon = styled.div`
  position:absolute;
  left:2px;
  top:4px;

  &::before{
    ${circleMixinFunc('white')}
    transform:scale(2)
  }

  &::after{
    ${({theme})=>circleMixinFunc(theme.green)}
  }

`
const AvatarClip = styled.div`
  width:48px;
  height:48px;
  border-radius:50%;
  overflow:hidden
`
const AvatarImage = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center
`
export default StyledAvatar
export { StatusIcon,AvatarClip,AvatarImage}