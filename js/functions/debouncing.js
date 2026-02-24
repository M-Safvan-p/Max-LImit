function debouncing(fn, delay){
    let timer;

    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,delay);
    }
}

function print(){
    console.log("after some second");
}

let debounced = debouncing(print, 3000);
debounced()
debounced()
debounced()