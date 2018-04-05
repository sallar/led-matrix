# HTML5 LED Matrix 

[![Build Status](https://travis-ci.org/sallar/led-matrix.svg?branch=master)](https://travis-ci.org/sallar/led-matrix)

An HTML5 Matrix display simulator that accepts a matrix of pixel data and renders them using HTML5 Canvas.

## Install

```shell
$ npm install led-matrix --save-dev
# or
$ yarn add led-matrix
```

## Usage

```js
import { LedMatrix } from 'led-matrix';
import { createStore } from 'matrix-display-store';

const store = createStore(32, 16);
const matrix = new LedMatrix(canvasElement, {
  x: 32,
  y: 16,
  // other options...
});
matrix.setData(store.matrix);
matrix.render();
```

## Options

``` typescript
{
  x: number;
  y: number;
  pixelWidth: number;
  pixelHeight: number;
  margin: number;
  glow: boolean;
  animated: boolean;
}
```

## License

Licensed under the [MIT License](LICENSE)
