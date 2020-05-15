import PackResult from './types/PackResult';
import TargetRectangleSizeError from './errors/TargetRectangleSizeError';
import Rectangle from './Rectangle';

/**
 * Packs a rectangle to another rectangle.
 * @param source - the rectangle to be packed
 * @param target - the rectangle to be packed on
 */
export default function pack(
  source: Rectangle,
  target: Rectangle,
  inAllOrientations = true,
): PackResult[] {
  if (target.length < source.length && target.width < source.width) {
    throw new TargetRectangleSizeError();
  }

  const orientations = inAllOrientations ? source.orientations() : [source];
  const result: PackResult[] = [];

  orientations.forEach((orientation) => {
    for (let i = orientation.width; i <= target.width; i += orientation.width) {
      for (
        let j = orientation.length;
        j <= target.length;
        j += orientation.length
      ) {
        const rectangle = new Rectangle(j, i);
        const length = rectangle.length;
        const width = rectangle.width;
        const lengthAmount = length / orientation.length;
        const widthAmount = width / orientation.width;
        const totalAmount = lengthAmount * widthAmount;
        const wastePercentage = 1 - rectangle.area / target.area;

        result.push({
          length,
          width,
          lengthAmount,
          widthAmount,
          totalAmount,
          wastePercentage,
        });
      }
    }
  });

  return result;
}
