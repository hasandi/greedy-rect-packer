import pack from '../src/pack';
import Rectangle from '../src/Rectangle';
import TargetRectangleSizeError from '../src/errors/TargetRectangleSizeError';

test('throws error if the target is smaller than the source', () => {
    const source = new Rectangle(100, 100);
    const target = new Rectangle(10, 10);

    expect(() => {
        pack(source, target);
    }).toThrow(TargetRectangleSizeError);
});

test('returns one combination if the source and target size is the same', () => {
    const source = new Rectangle(10, 10);
    const target = new Rectangle(10, 10);
    const result = pack(source, target);

    expect(result.length).toBe(1);
});

test('packs the rectangle accordingly', () => {
    const source = new Rectangle(50, 50);
    const target = new Rectangle(105, 297);
    const result = pack(source, target);

    expect(result).toBeDefined();
});
