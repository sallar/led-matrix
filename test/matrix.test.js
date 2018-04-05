import { LedMatrix } from '../dist';
import { createStore } from 'matrix-display-store';

describe('LedMatrix', () => {
  it('should set the right canvas size', () => {
    const canvasElement = document.createElement('canvas');
    const matrix = new LedMatrix(canvasElement, {
      x: 10,
      y: 10,
      margin: 0,
      pixelHeight: 5,
      pixelWidth: 5
    });
    expect(canvasElement.width).toEqual(50);
    expect(canvasElement.height).toEqual(50);
  });
});
