function getNumber1(x) {
    return function getNumber2(y) {
    let result;
    return result = x + y;
    };
    }  
    const sum = getNumber1(6);
    console.log(sum(5));