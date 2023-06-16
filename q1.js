// Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback. 

function DoubleArr(array,callback) {
    const DoubleArr = array.map((num)=>{
        return callback(num)
    });
    return DoubleArr;
}

const newarray = [1,2,3,4,5,6]

function callback(num){
    return num*2
}

// const reult = DoubleArr(newarray,callback)
console.log(DoubleArr(newarray,callback));