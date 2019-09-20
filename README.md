该项目用的是 Create React App 启动的  
提供后台管理系统常用的组件

## 目前拥有的功能

### Audio

**Exmaple**:

```Tsx
import { Audio } from 'src/components'

 <Audio className="button-style" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
    播放
</Audio>
```

**演示**:

![image](./gifs/audio.gif)

**API**:
| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| src | 音频的资源路径 | string | -

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

用于开启页面，调试组件，在 App.tsx 中调试自己的组件

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build:lib`

根据 2 个入口文件，构建相应的 lib 包，并生成在 es 目录

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
