function Nature( x ){
    if(x < 1 ){
        return false;
    }
    var i = 2;
    var result = true;
    while (i*i<=x) {        
        if(x%i == 0){
            result = false;
        }
        i++;
    }
    return result;
}
var n = 0;
while (n < 100){
    ++n;
    if (Nature(n)) {
        console.log(n);
        
    }
}