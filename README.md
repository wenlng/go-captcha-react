# Go Captcha React Package

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

### params
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
  confirm?: (dots: Array<CaptchaDot>) => boolean;
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
### params
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
}

// data = {}
interface Data {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: CaptchaPoint) => boolean;
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

### params
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
}

// data = {}
interface Data {
  angle: number;
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number) => boolean;
}
```