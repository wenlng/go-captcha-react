<div align="center">
<img width="120" style="padding-top: 50px; margin: 0;" src="http://47.104.180.148/go-captcha/gocaptcha_logo.svg?v=1"/>
<h1 style="margin: 0; padding: 0">Go Captcha</h1>
<p>The Behavior Captcha For The React</p>

</div>

<br/>

> English | [中文](README_zh.md)

<br/>

<p> ⭐️ If it helps you, please give a star.</p>

<img src="http://47.104.180.148/go-captcha/go-captcha-v2.jpg" alt="Poster">


## Install
```shell
yarn add go-captcha-react
# or
npm install go-captcha-react
# or
pnpm install go-captcha-react
```


```ts
import GoCaptcha from 'go-captcha-react';
```

## Click Mode
```jsx
<GoCaptcha.Click
  config={{}}
  data={{}}
  events={{}}
  ref={domRef}
/>
<script>
  // call methods
  const domRef = useRef(null)
  domRef.clear()
  domRef.refresh()
</script>
```


```ts
// config = {}
interface Config {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  buttonText?: string;
  iconSize?: number;
  dotSize?: number;
}

// data = {}
interface Data {
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  click?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (dots: Array<ClickDot>, reset:() => void) => boolean;
}

// component method
interface ClickMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## Slide Mode
```jsx
<GoCaptcha.Slide
  config={{}}
  data={{}}
  events={{}}
  ref={domRef}
/>
<script>
  // call methods
  const domRef = useRef(null)
  domRef.clear()
  domRef.refresh()
</script>
```


```ts
// config = {}
interface SlideConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlidePoint, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## Drag-And-Drop Mode
```jsx
<GoCaptcha.SlideRegion
  config={{}}
  data={{}}
  events={{}}
  ref={domRef}
/>
<script>
  // call methods
  const domRef = useRef(null)
  domRef.clear()
  domRef.refresh()
</script>
```

```ts
// config = {}
interface SlideRegionConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideRegionData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideRegionEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlideRegionPoint, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```


## Rotation Mode
```jsx
<GoCaptcha.Rotate
  config={{}}
  data={{}}
  events={{}}
  ref={domRef}
/>
<script>
  // call methods
  const domRef = useRef(null)
  domRef.clear()
  domRef.refresh()
</script>
```


```ts
// config = {}
interface Config {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface Data {
  angle: number;
  image: string;
  thumb: string;
  thumbSize: number;
}

// events = {}
interface Events {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```


## Button
```vue
<GoCaptcha.Button />
```


```ts
interface _ {
  config?: CaptchaConfig;
  clickEvent?: () => void;
  disabled?: boolean;
  type?: "default" | "warn" | "error" | "success";
  title?: string;
}

export interface CaptchaConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}

```
