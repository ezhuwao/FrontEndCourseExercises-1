const fibonacci = function(n) {
    
     if (n<=0){
                return 'OOPS';
            }
    return n < 1? 0
            : n <= 2? 1
            : fibonacci(n-1) + fibonacci(n-2);
           

}

module.exports = fibonacci
