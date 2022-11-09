const rectangle = require('../js/rectangle');


test('should return proper perimeter of the rectangle', () => {
    const outputPerimeter = rectangle.getRectanglePerimeter(1,2);
    expect(outputPerimeter).toBe(6)
});

test('should return NaN instead of the perimeter value', () => {
    const outputInvalidPerimeter = rectangle.getRectanglePerimeter(1,'Hi');
    expect(outputInvalidPerimeter).toBe(NaN)
});

test('should return proper area of the rectangle', () => {
    const outputArea = rectangle.getRectangleArea(4,5);
    expect(outputArea).toBe(20)
});

test('should return NaN instead of the area value', () => {
    const outputInvalidArea = rectangle.getRectangleArea('Hello',5);
    expect(outputInvalidArea).toBe(NaN)
});

test('should return proper values of area and perimeter of the rectangle', () => {
    const outputRecInfo = jest.spyOn(console, 'log')
    rectangle.getRectangleInfo(5,7);
    expect(outputRecInfo).toHaveBeenCalledWith('The perimeter of a rectangle is 24 and the area is 35')
});