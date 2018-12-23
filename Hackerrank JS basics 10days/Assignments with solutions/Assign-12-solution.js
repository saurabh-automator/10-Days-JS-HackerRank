/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var rect = {
        length : a,
        width : b,
        perimeter : 2 * (a + b),
        area : a * b
    };
    var o = Object.create(rect);
    return o;
}