function isInterval(num1, num2) {
    let a = num1;   
    const getInterval = setInterval (function() {
        if ( a <= num2 ) {
        console.log(a);
        a++;
        } else {clearInterval(setInterval);
        }
    }, 1000);
}
    isInterval(1, 8);