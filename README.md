# React UI组件库

## 目录

- [基础概括](#基础概括)
- [styled-component](#styled-component)
- [PropTypes校验传值的类型](#PropTypes校验传值的类型)
- [配置绝对路径](#配置绝对路径)
- [Hygen模板生成器](#Hygen模板生成器)
- [fontawesome图标库](#fontawesome图标库)
- [React](#React)

## 基础概括

- class插件 styled-components
- 展示界面 storybook  npx -p @storybook/cli sb init

安装好storybook后，要给它配置一下我们自己的 styled-components 主题色
在.storybook文件下的preview.js文件里设置(没有的话新建)
```js
import React from 'react'
import { addDecorator} from '@storybook/react'
import { ThemeProvider} from 'styled-components'
import  theme from '../src/theme'


addDecorator(storyFn=>(
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
))
```

新建components文件夹 然后新建Avatar文件夹
目录结构
```
- index.js //组件代码
- style.js //组件样式
- xxx.stories.js // storybook展示组件代码（storybook会自动识别stories.js文件 并展示）
```
举例avatar.stories.js
```js
import React from 'react'
import Avatar from '.'
export default {
  title:'Avatar',
  component:Avatar
}

export const Default = ()=>{
  return <Avatar/>
}
```
这样就可以自动展示出来了


## styled-component

- 把div通过styled-component生成一个组件，更加语义化,用的时候就像使用正常组件一样StyledAvatar
```js
const StyledAvatar = styled.div`
  position:relative
`

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

```

- styled-component 结构写法,以及${} 使用变量，回调函数里会返回我们事先配置theme
```js
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
```
- styled-component 重复代码封装,定义一个函数 返回styled-component 的css，在里面写重复封装的代码，也可以接受参数，用法就是上面的css样式写法

```js
const circleMixinFunc = color => css`
  content:"";
  position:absolute;
  display:block;
  width:8px;
  height:8px;
  border-radius:50%;
  background-color:${color};
`
```
- 页面组件中，如果想想使用主题的颜色，但又不想创建一个styled component
1.styled-component支持给组件传递一个css使用，用来编写css样式，写法和styled-component一致
在.babelrc中使用插件 
```js
{
  "plugins": ["macros"]
}

//在组件中使用
//页面中一定要引入
import "styled-components/macro"
<div css={`
  background-color:${({theme})=>theme.darkPurple};
  width:100px
`}>
  <MenuItem showBadge active icon={faCommentDots}></MenuItem>
</div>
```
2.第二种办法使用styled-component的hooks
```js
import { useTheme } from 'styled-components'
function Search({placeholder="请输入内容...",...rest}){
  const theme = useTheme()
  return(
    <Input placeholder={placeholder} prefix={<Icon icon={SearchIcon} color={theme.gray3} width={18} height={18}></Icon>} {...rest}></Input>
  )
}
```
- 在写css的时候，如果要修改其里面其他组件的样式可以通过${组件名称}{ css...}直接修改
```js
const StyledNavBar = styled.nav`
  display:grid;
  grid-template-rows:1fr 4fr;
  width:100px;
  height:100vh;
  background-color:${({theme})=>theme.darkPurple};
  padding:30px 0;

  /* 修改里面组件的样式 */
  ${StyledAvatar}{
    justify-self:center;
    ${StatusIcon}{
      &::before{
        background-color:${({theme})=>theme.darkPurple}
      }
    }
  }
`;
```
## PropTypes校验传值的类型

```js
import PropTypes from 'prop-types'


Avatar.propTypes = {
  src:PropTypes.string.isRequired,
  size:PropTypes.string,
  status:PropTypes.oneOf(['online','offline']),
  statusIconSize:PropTypes.string
}

```


## 配置绝对路径
指定src为根目录
- 新建jsconfig.json在根目录
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules","**/node_modules/*"]
}
```

## Hygen模板生成器
安装
```
npm i -g hygen
```

初始化

```
hygen init self

```

再次执行
```
hygen generator new component
```
会在.template文件夹下生成一个component文件夹

然后新建 index.ejs.t 、 style.ejs.t 和 stories.ejs.t
内容分别为
index.ejs.t
```
---
to: src/components/<%= name %>/index.js
---

import React from 'react'
import Styled<%= name %> from './style'
import PropTypes from 'prop-types'

function <%= name %>({children, ...rest}) {
  return (
    <Styled<%= name %> {...rest}>
      {children}
    </Styled<%= name %>>
  )
}

<%= name %>.propTypes = {
  children:PropTypes.any
}

export default <%= name %>



```

style.ejs.t
```
---
to: src/components/<%= name %>/style.js
---

import styled from 'styled-components'

const Styled<%= name %> = styled.div``;

export default Styled<%= name %>



```
stories.ejs.t,<%= h.changeCase.lcFirst(name) %>是为了处理把大写字母变成小写
```
---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import React from 'react'
import <%= name %> from "."

export default {
  title:"<%= name %>",
  component:<%= name %>
}

export const Default = () => <<%= name %>>默认</<%= name %>>

```

## fontawesome图标库

```
yarn add @fortawesome/react-fontawesome  //fontawesome的react组件
yarn add @fortawesome/fontawesome-svg-core  //核心图标库
yarn add @fortawesome/free-brands-svg-icons  //品牌图标库，比如微信、微博等
yarn add @fortawesome/free-regular-svg-icons //空心图标库
yarn add @fortawesome/free-solid-svg-icons  //实心图标库

```

## css
1rem等于10像素
`
html{
  font-size: 62.5%;
}

`
# React
- 把一个函数组件当作自己的子组件并导出去
```js
const Input = ()=>{
  return (
    //...
  )
}

const Child = () =>{
  //....
}

//重要一步

Input.Child = Child 
//这样就导出去了 ，使用的时候<Input.Child>访问子组件
```