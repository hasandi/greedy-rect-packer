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

test('packs a square in just one orientations resulting the same result in all orientations', () => {
  const source = new Rectangle(50, 50);
  const target = new Rectangle(210, 297);
  const allOrientationsResult = pack(source, target);
  const oneOrientationResult = pack(source, target, false);

  expect(oneOrientationResult.length).toBe(allOrientationsResult.length);
});

test('packs a rectangle in just one orientations resulting in less than half of the result in all orientations', () => {
  const source = new Rectangle(105, 210);
  const target = new Rectangle(210, 297);
  const allOrientationsResult = pack(source, target);
  const oneOrientationResult = pack(source, target, false);

  expect(oneOrientationResult.length).toBe(
    Math.floor(allOrientationsResult.length / 2),
  );
});
