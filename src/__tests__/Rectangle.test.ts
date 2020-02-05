import Rectangle from '../Rectangle';

test('has width and height which were numbers', () => {
    let rect = new Rectangle(20, 10);

    expect(typeof rect.width).toBe('number');
    expect(typeof rect.height).toBe('number');
});

test("can be checked whether it's a square", () => {
    let shape1 = new Rectangle(10, 10);
    expect(shape1.isSquare()).toBe(true);

    let shape2 = new Rectangle(10, 20);
    expect(shape2.isSquare()).toBe(false);
});

test("can be checked whether it's in portrait position", () => {
    let portrait = new Rectangle(10, 20);
    expect(portrait.isPortrait()).toBe(true);

    let landscape = new Rectangle(20, 10);
    expect(landscape.isPortrait()).toBe(false);
});

test("can be checked whether it's in landscape position", () => {
    let portrait = new Rectangle(10, 20);
    expect(portrait.isLandscape()).toBe(false);

    let landscape = new Rectangle(20, 10);
    expect(landscape.isLandscape()).toBe(true);
});

test('can be rotated', () => {
    let rect = new Rectangle(20, 10);

    rect.rotate90Deg();

    expect(rect.width).toBe(10);
    expect(rect.height).toBe(20);
});

test('can get all orientations', () => {
    let rect = new Rectangle(20, 10);
    let orientations = rect.orientations();

    expect(orientations).toBeDefined();
});
