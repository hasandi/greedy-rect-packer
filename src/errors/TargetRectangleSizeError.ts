export default class TargetRectangleSizeError extends Error {
    constructor() {
        super('The target rectangle is smaller than the source');
        Object.setPrototypeOf(this, TargetRectangleSizeError.prototype);
    }
}
