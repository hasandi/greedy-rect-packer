import clone from 'lodash-es/clone';

/**
 * Rectangle class.
 */
export default class Rectangle {
  private _length: number;
  private _width: number;

  /**
   * Rectangular object constructor.
   * @param length - the rectangular object length
   * @param width - the rectangular object width
   */
  constructor(length: number, width: number) {
    this._length = length;
    this._width = width;
  }

  /**
   * length getter.
   */
  get length(): number {
    return this._length;
  }

  /**
   * width getter.
   */
  get width(): number {
    return this._width;
  }

  /**
   * Area getter.
   */
  get area(): number {
    return this._length * this._width;
  }

  /**
   * Returns whether the rectangular object is a square.
   */
  isSquare(): boolean {
    return this._length === this._width;
  }

  /**
   * Returns whether the rectangular object is in portrait orientation.
   */
  isPortrait(): boolean {
    return this.isSquare() ? true : this.length < this.width;
  }

  /**
   * Returns whether the rectangular object is in landscape orientation.
   */
  isLandscape(): boolean {
    return this.isSquare() ? true : this.width < this.length;
  }

  /**
   * Returns the rectangular object in portrait orientation.
   */
  portrait(): Rectangle {
    return this.isPortrait() ? clone(this) : clone(this).rotate90Deg();
  }

  /**
   * Returns the rectangular object in landscape orientation.
   */
  landscape(): Rectangle {
    return this.isLandscape() ? clone(this) : clone(this).rotate90Deg();
  }

  /**
   * Returns rectangular object in all orientations.
   */
  orientations(): Rectangle[] {
    if (this.isSquare()) {
      return [clone(this)];
    } else {
      const portrait = clone(this).portrait();
      const landscape = clone(this).landscape();

      return [portrait, landscape];
    }
  }

  /**
   * Rotates the rectangular object by 90 degrees.
   */
  rotate90Deg(): Rectangle {
    const rect = clone(this);
    [rect._length, rect._width] = [rect._width, rect._length];

    return rect;
  }
}
