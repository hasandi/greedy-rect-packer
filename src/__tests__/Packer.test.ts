import pack from '../pack';
import Rectangle from '../Rectangle';
import TargetRectangleSizeError from '../errors/TargetRectangleSizeError';

test('throws error if the target is smaller than the source', () => {
    let source = new Rectangle(100, 100);
    let target = new Rectangle(10, 10);

    expect(() => {
        pack(source, target);
    }).toThrow(TargetRectangleSizeError);
});

test('returns one combination if the source and target size is the same', () => {
    let source = new Rectangle(10, 10);
    let target = new Rectangle(10, 10);
    let result = pack(source, target);

    expect(result.length).toBe(1);
});
