# React UI组件库

## 目录

[基础概括](#基础概括)

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


## 配置相对路径 指定src为根目录
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

## 使用 fontawesome图标库

```
yarn add @fortawesome/react-fontawesome  //fontawesome的react组件
yarn add @fortawesome/fontawesome-svg-core  //核心图标库
yarn add @fortawesome/free-brands-svg-icons  //品牌图标库，比如微信、微博等
yarn add @fortawesome/free-regular-svg-icons //空心图标库
yarn add @fortawesome/free-solid-svg-icons  //实心图标库

```