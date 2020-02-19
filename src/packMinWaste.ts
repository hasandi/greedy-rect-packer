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
  if (target.width < source.width && target.height < source.height) {
    throw new TargetRectangleSizeError();
  }

  let result: PackResult = {
    width: 1,
    height: 1,
    widthAmount: 1,
    heightAmount: 1,
    totalAmount: 1,
    wastePercentage: 1,
  };

  source.orientations().forEach(orientation => {
    for (
      let i = orientation.height;
      i <= target.height;
      i += orientation.height
    ) {
      for (
        let j = orientation.width;
        j <= target.width;
        j += orientation.width
      ) {
        const rectangle = new Rectangle(j, i);
        const width = rectangle.width;
        const height = rectangle.height;
        const widthAmount = rectangle.width / orientation.width;
        const heightAmount = rectangle.height / orientation.height;
        const totalAmount = widthAmount * heightAmount;
        const wastePercentage = 1 - rectangle.area / target.area;

        if (!result || wastePercentage < result.wastePercentage) {
          result = {
            width,
            height,
            widthAmount,
            heightAmount,
            totalAmount,
            wastePercentage,
          };
        }
      }
    }
  });

  return result;
}
