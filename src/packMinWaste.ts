import PackResult from './types/PackResult';
import TargetRectangleSizeError from './errors/TargetRectangleSizeError';
import Rectangle from './Rectangle';

/**
 * Packs a rectangle to another rectangle and return a result with the least waste.
 * @param source
 * @param target
 */
export default function packMinWaste(
  source: Rectangle,
  target: Rectangle,
): PackResult {
  if (target.length < source.length && target.width < source.width) {
    throw new TargetRectangleSizeError();
  }

  let result: PackResult = {
    length: 1,
    width: 1,
    lengthAmount: 1,
    widthAmount: 1,
    totalAmount: 1,
    wastePercentage: 1,
  };

  source.orientations().forEach((orientation) => {
    for (let i = orientation.width; i <= target.width; i += orientation.width) {
      for (
        let j = orientation.length;
        j <= target.length;
        j += orientation.length
      ) {
        const rectangle = new Rectangle(j, i);
        const length = rectangle.length;
        const width = rectangle.width;
        const lengthAmount = rectangle.length / orientation.length;
        const widthAmount = rectangle.width / orientation.width;
        const totalAmount = lengthAmount * widthAmount;
        const wastePercentage = 1 - rectangle.area / target.area;

        if (!result || wastePercentage < result.wastePercentage) {
          result = {
            length,
            width,
            lengthAmount,
            widthAmount,
            totalAmount,
            wastePercentage,
          };
        }
      }
    }
  });

  return result;
}
