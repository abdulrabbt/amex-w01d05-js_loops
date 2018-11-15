/* 
//var pling = 'pling', plong = 'plong', plang = 'plang';

function Raindrops(number){

    if (number % 3 == 0){
        var pling = 'pling'
        //console.log("Pling");
        return pling;
    }

    if (number % 5 == 0){
        var plong = 'plong'
        //console.log("Plang");
        return plang;
    }

    if (number % 7 == 0){
        var plang = 'plang';
        //console.log("Plong");
        return plong;
    } */

    /* if (pling !== "" ){
        if (plang !== ""){
            console.log(pling, plang)
        }
    } else {
        console.log(pling)
    }

    if (plon !== ""){
        console.log(plong)
    } */


    

    function Raindrops(number){

        if (number % 3 == 0){
            if (number % 5 == 0){
                console.log("PlingPlang");
            } else if (number % 7 == 0){
                return console.log("PlingPlangPlong");
            } else {
                return console.log("Pling");
            }
        } else if (number % 5 == 0){
            if (number % 3 == 0){
                console.log("PlangPling");
            } else if (number % 7 == 0){
                return console.log("PlangPlingPlong");
            } else {
                return console.log("Plang");
            }
        }  else if (number % 7 == 0){
            if (number % 3 == 0){
                console.log("PlongPling");
            } else if (number % 5 == 0){
                return console.log("PlongPlingPlang");
                
            } else {
                return console.log("Plong");
            } 
        } else {
                console.log(number);  
        }

    };


Raindrops(34);