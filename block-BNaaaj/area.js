function areaOfSquare(num){
    return num * num;
}

function areaOfRectangle(a, b){
    return a * b;
}

function areaOfCircle(radius){
    return 3.14 * radius * radius;
}

module.exports = {
    areaOfSquare : areaOfSquare,
    areaOfRectangle: areaOfRectangle,
    areaOfCircle: areaOfCircle
}