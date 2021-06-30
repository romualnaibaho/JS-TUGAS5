function perulangan(){
    var hasil = [];

    for(var i = 1; i <= 20; i++){
        if(i % 3 == 0){
            hasil.push(i);
        }
    }

    return hasil;
}

console.log("Kelipatan 3 :", perulangan());