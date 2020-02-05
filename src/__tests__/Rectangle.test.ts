import Rectangle from '../Rectangle';

test('has width and height which were numbers', () => {
    const rect = new Rectangle(20, 10);

    expect(typeof rect.width).toBe('number');
    expect(typeof rect.height).toBe('number');
});

test('its area can be calculated', () => {
    const rect = new Rectangle(10, 10);

    expect(rect.area).toBe(100);
});

test("can be checked whether it's a square", () => {
    const shape1 = new Rectangle(10, 10);
    expect(shape1.isSquare()).toBe(true);

    const shape2 = new Rectangle(10, 20);
    expect(shape2.isSquare()).toBe(false);
});

test("can be checked whether it's in portrait position", () => {
    const portrait = new Rectangle(10, 20);
    expect(portrait.isPortrait()).toBe(true);

    const landscape = new Rectangle(20, 10);
    expect(landscape.isPortrait()).toBe(false);
});

test("can be checked whether it's in landscape position", () => {
    const portrait = new Rectangle(10, 20);
    expect(portrait.isLandscape()).toBe(false);

    const landscape = new Rectangle(20, 10);
    expect(landscape.isLandscape()).toBe(true);
});

test('can be rotated', () => {
    const rect = new Rectangle(20, 10);
    const rotatedRect = rect.rotate90Deg();

    expect(rotatedRect.width).toBe(10);
    expect(rotatedRect.height).toBe(20);
});

test('can get all orientations', () => {
    const rect = new Rectangle(20, 10);
    const orientations = rect.orientations();

    expect(orientations).toBeDefined();
});
