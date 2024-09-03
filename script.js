function isPowerOfTwo(N) {
    if (N > 0 && (N & (N - 1)) === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}


isPowerOfTwo(8);  
isPowerOfTwo(3);  

function sumOfDigits(N) {
   
    if (N === 0) {
        return 0;
    }

    
    return (N % 10) + sumOfDigits(Math.floor(N / 10));
}


console.log(sumOfDigits(179));  
console.log(sumOfDigits(985)); 

function fibonacci(n) {
    
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
   
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(N) {
    for (let i = 0; i < N; i++) {
        console.log(fibonacci(i));
    }
}


printFibonacciSeries(10);

function isPalindrome(str, start = 0, end = str.length - 1) {
    
    if (start >= end) {
        return true;
    }

   
    if (str[start] !== str[end]) {
        return false;
    }

   
    return isPalindrome(str, start + 1, end - 1);
}


console.log(isPalindrome("radar"));  
console.log(isPalindrome("hello")); 
console.log(isPalindrome("level"));  
console.log(isPalindrome("a"));     
console.log(isPalindrome(""));      