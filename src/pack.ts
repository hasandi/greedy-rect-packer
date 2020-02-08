import PackResult from './types/PackResult';
import Rectangle from './Rectangle';
import TargetRectangleSizeError from './errors/TargetRectangleSizeError';

/**
 * Packs a rectangle to another rectangle.
 * @param source - the rectangle to be packed
 * @param target - the rectangle to be packed on
 */
export default function pack(source: Rectangle, target: Rectangle): PackResult[] {
    if (target.width < source.width || target.height < source.height) {
        throw new TargetRectangleSizeError();
    }

    const result: PackResult[] = [];

    source.orientations().forEach(orientation => {
        for (let i = orientation.height; i <= target.height; i += orientation.height) {
            for (let j = orientation.width; j <= target.width; j += orientation.width) {
                const rectangle = new Rectangle(j, i);
                const width = rectangle.width;
                const height = rectangle.height;
                const widthAmount = rectangle.width / orientation.width;
                const heightAmount = rectangle.height / orientation.height;
                const totalAmount = widthAmount * heightAmount;
                const wastePercentage = 1 - rectangle.area / target.area;

                result.push({ width, height, widthAmount, heightAmount, totalAmount, wastePercentage });
            }
        }
    });

    return result;
}
