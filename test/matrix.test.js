import { LedMatrix } from '../dist';
import { createStore, Color } from 'matrix-display-store';

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

  it('should draw geometrix shapes correctly', () => {
    const canvasElement = document.createElement('canvas');
    const store = createStore(10, 10);
    const matrix = new LedMatrix(canvasElement, {
      x: 10,
      y: 10,
      margin: 0,
      pixelHeight: 5,
      pixelWidth: 5
    });
    store.drawRect(0, 0, 10, 10, Color.hex('#f00000'));
    store.drawTriangle(5, 1, 1, 8, 8, 8, Color.hex('#7E9DE4'));
    matrix.setData(store.matrix);
    matrix.render();
    expect(canvasElement.toDataURL()).toEqual(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABB0lEQVRoQ+2auxGDQAxElw6cm+7owAU4cAHugO5wTgdmcOAAdDN7FidrmCWWdLd6Wv7dDLxxgqOTkGQURSQZEJhELsD1yI3ex+m1rfcY+p/XmIFdPQmpISYihW5ptLxjZOWnN7vlBwn5p0dEpMKIIWct9prBxln6JKSCOthOs3EisnbAc/fLdpqNCyHi2Ywn93CzezbjyZWQ0lnL01VProi0IGLVZCmlIiIhAETkVB5hjVhzg7mNZddwjRa7iIQA9COAiKzjotHymKbQwNvQ76rSb+MjiLBXewmJ8oiIAPant+c4OS3aNp32iIS0BfGtLiJBjaaXoYnQFRMF6heORDA+WxGRbEQWAqOb8J4s55YAAAAASUVORK5CYII='
    );
  });
});
