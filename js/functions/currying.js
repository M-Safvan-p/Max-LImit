// sum basic

function add(a){
    return function(b){
        console.log(a + b);
    }
}

add(1)(4);

function add3(a){
    return function(b){
        return function (c){
            console.log(a+b+c);
        }
    }
}

add3(1)(4)(5);

// string

function build(word1){
    return function(word2){
        return function(word3){
            console.log(`${word1} ${word2} ${word3}`);
        }
    }
}

build("hellow")("safvan")("🔥");

// advance handle infinite

function sum (a){
    let total = a;

    function inner(b){
        if(b === undefined){
            return total
        }
        total +=b;
        return inner;
    }
    return inner
}
console.log(sum(20)(20)(10)());