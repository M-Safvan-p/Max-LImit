function throttle(fn, delay){
    let isRunning = false;

    return function (){
        if(isRunning){
            return;
        }
        fn();
        isRunning = true;

        setTimeout(()=> {
            isRunning = false;
        }, delay)
    }
}


function print(){
    console.log("if you called multiple time in 3 second i will print once");
}

let throttlePrint = throttle(print, 3000);
throttlePrint()
throttlePrint()