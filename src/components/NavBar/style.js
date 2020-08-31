import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeBar } from 'utils/mixins';

const StyledMenuItem = styled.div`
  & > a{
    width:100%;
    height:74px;

    display:flex;
    align-items:center;
    justify-content:center;

    ${ activeBar()}
    ${({active})=> active?"":`$::before,&::after { height:0}`}

  }
`
/**
 * styled函数形式 可以自定义返回自己的组件
 */
const MenuIcon = styled(FontAwesomeIcon)`
  color:white;
  font-size:24px;
  opacity:${({active})=> active ? 1:0.3}
`

const StyledNavBar = styled.div``;

export default StyledNavBar


export { StyledMenuItem , MenuIcon}