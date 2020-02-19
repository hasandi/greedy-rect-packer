import packMinWaste from '../src/packMinWaste';
import Rectangle from '../src/Rectangle';
import TargetRectangleSizeError from '../src/errors/TargetRectangleSizeError';

test('throws error if the target is smaller than the source', () => {
  const source = new Rectangle(100, 100);
  const target = new Rectangle(10, 10);

  expect(() => {
    packMinWaste(source, target);
  }).toThrow(TargetRectangleSizeError);
});

test('packs the rectangle accordingly', () => {
  const source = new Rectangle(50, 50);
  const target = new Rectangle(105, 297);
  const result = packMinWaste(source, target);

  expect(result).toBeDefined();
});
