let arrey1 = [48, 55, 'text', 3, 36, 0, 17, 7, 10, null, 22, NaN, 9 ]
let arrey2 = [25, 55, 'text', 3, 35, 0, 0, '7', 11, null, 22, NaN, 9 ]
function getNumberItemes(arrey) {
let odd = 0;
let even = 0;
let zero = 0;
for (let i = 0; i < arrey.length; i++) {
    if (typeof (arrey[i]) === 'number' && !isNaN(arrey[i])) {
    	if (arrey[i] !==0) {	
          if (arrey[i]%2 === 0) {
            odd++;
          } else if (arrey[i]%2 !== 0) {
            even++;
          }
        } else if (arrey[i] === 0) { 
            zero++;
        } 
    }
}
console.log(`Количество четных элементов - ${odd}, количество нечетных элементов - ${even}, ноль - ${zero}`);
};
getNumberItemes(arrey1);
getNumberItemes(arrey2);