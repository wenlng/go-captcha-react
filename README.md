# Go Captcha React Package

<p> ⭐️ If it helps you, please give a star.</p>
<img src="http://47.104.180.148/go-captcha/go-captcha-v2.jpg" alt="Poster">

<br/>

## Install
```shell
yarn add go-captcha-react
# or
npm install go-captcha-react
# or
pnpm install go-captcha-react
```

## 🖖 Click Mode Captcha
```jsx
import GoCaptcha from 'go-captcha-react';

<GoCaptcha.Click
  config={{}}
  data={{}}
  events={{}}
/>
```

### Parameter Reference
```ts
// config = {}
interface ClickConfig {
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
interface ClickData {
  image: string;
  thumb: string;
}

// events = {}
interface ClickEvents {
  click?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (dots: Array<ClickDot>, reset: ()=>void) => void;
}

// component method
interface ImperativeHandle {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## 🖖 Slide Mode Captcha
```jsx
import GoCaptcha from 'go-captcha-react';

<GoCaptcha.Slide
  config={{}}
  data={{}}
  events={{}}
/>

<GoCaptcha.SlideRegion
  config={{}}
  data={{}}
  events={{}}
/>
```
### Parameter Reference
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
  confirm?: (point: SlidePoint, reset: ()=>void) => void;
}

// component method
interface ImperativeHandle {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
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
  confirm?: (point: SlideRegionPoint, reset() => void) => void;
}

// component method
interface ImperativeHandle {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```


## 🖖 Rotate Mode Captcha
```jsx
import GoCaptcha from 'go-captcha-react';

<GoCaptcha.Rotate
  config={{}}
  data={{}}
  events={{}}
/>
```

### Parameter Reference
```ts
// config = {}
interface RotateConfig {
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
interface RotateData {
  angle: number;
  image: string;
  thumb: string;
}

// events = {}
interface RotateEvents {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number, reset: ()=>void) => void;
}

// component method
interface ImperativeHandle {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```


## 🖖 Button
```jsx
import GoCaptcha from 'go-captcha-react';

<GoCaptcha.Button />
```

### Parameter Reference
```ts
interface _ {
  config?: ButtonConfig;
  clickEvent?: () => void;
  disabled?: boolean;
  type?: "default" | "warn" | "error" | "success";
  title?: string;
}

export interface ButtonConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}
```

<br/>

## 👍 Sponsor
<div>
<a href="http://gocaptcha.wencodes.com/sponsor/" target="_blank">http://gocaptcha.wencodes.com/sponsor/</a>
</div>
<br/>