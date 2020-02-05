import clone from 'lodash-es/clone';

/**
 * Rectangle class.
 */
class Rectangle {
    private _width: number;
    private _height: number;

    /**
     * Rectangular object constructor.
     * @param width - the rectangular object width
     * @param height - the rectangular object height
     */
    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    /**
     * Width getter.
     */
    get width(): number {
        return this._width;
    }

    /**
     * Height getter.
     */
    get height(): number {
        return this._height;
    }

    /**
     * Area getter.
     */
    get area(): number {
        return this._width * this._height;
    }

    /**
     * Returns whether the rectangular object is a square.
     */
    isSquare(): boolean {
        return this._width === this._height;
    }

    /**
     * Returns whether the rectangular object is in portrait orientation.
     */
    isPortrait(): boolean {
        return this.isSquare() ? true : this.width < this.height;
    }

    /**
     * Returns whether the rectangular object is in landscape orientation.
     */
    isLandscape(): boolean {
        return this.isSquare() ? true : this.height < this.width;
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
        [rect._width, rect._height] = [rect._height, rect._width];

        return rect;
    }
}

export default Rectangle;
