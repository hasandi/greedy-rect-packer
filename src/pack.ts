import Rectangle from './Rectangle';
import TargetRectangleSizeError from './errors/TargetRectangleSizeError';

type PackResult = {
    rectangle: Rectangle;
    amount: number;
};

/**
 * Packs a rectangle to another rectangle.
 * @param source - the rectangle to be packed
 * @param target - the rectangle to be packed on
 */
function pack(source: Rectangle, target: Rectangle): PackResult[] {
    if (target.width < source.width || target.height < source.height) {
        throw new TargetRectangleSizeError();
    }

    const result: PackResult[] = [];

    source.orientations().forEach(orientation => {
        for (let i = orientation.height; i <= target.height; i += orientation.height) {
            for (let j = orientation.width; j <= target.width; j += orientation.width) {
                const rectangle = new Rectangle(j, i);
                const amount = (rectangle.width / orientation.width) * (rectangle.height / orientation.height);

                result.push({ rectangle, amount });
            }
        }
    });

    return result;
}

export default pack;
