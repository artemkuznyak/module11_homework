function isPrimeNumber(n) {
 
	if (n <= 1000) {
  	    if (n === 1 || n === 0) {
        return console.log(`Число ${n}`);
        }
		for (let i = 2; i < n; i++) {
  		if (n % i === 0) {   	
      return console.log(`Число ${n} не является простым`);    	
      }        	
    } return console.log(`Число ${n} простое`);
  } else  { 
  return console.log('Данные неверны');
}
} 
isPrimeNumber(11);