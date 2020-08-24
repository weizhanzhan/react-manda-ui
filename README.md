# React UI组件库

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
