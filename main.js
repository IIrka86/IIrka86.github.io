function quadraticEquation(a, b, c) {
    var result = [];
    var d = b * b - 4 * a * c;
    if(d === 0){
        result.push(-b/2);
        return result;
    }
    if(d > 0){
        result.push((-b + Math.sqrt(d)) / 2.0);
        result.push((-b - Math.sqrt(d)) / 2.0);
    }
    return result;
}

console.log(quadraticEquation(1, 6, 1));
console.log('-0.1715728752538097, -5.82842712474619');
console.log(quadraticEquation(1, 6, 1).join(',') );