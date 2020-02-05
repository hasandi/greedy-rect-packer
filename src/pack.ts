import Rectangle from './Rectangle';
import TargetRectangleSizeError from './errors/TargetRectangleSizeError';

/**
 * Packs a rectangle to another rectangle.
 * @param source - the rectangle to be packed
 * @param target - the rectangle to be packed on
 */
function pack(source: Rectangle, target: Rectangle): Rectangle[] {
    if (target.width < source.width || target.height < source.height) {
        throw new TargetRectangleSizeError();
    } else if (target.width === source.width && target.height === source.height) {
        return [new Rectangle(target.width, target.height)];
    } else {
        let result: Rectangle[] = [];

        source.orientations().forEach(orientation => {
            for (let i = orientation.height; i <= target.height; i += orientation.height)
                for (let j = orientation.width; j <= target.width; j += orientation.width)
                    result.push(new Rectangle(j, i));
        });

        return result;
    }
}

export default pack;
