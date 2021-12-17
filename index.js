// Code your solution here
function findMatching(arr, str){

    const flt = arr.filter(name => name.toLowerCase() === str.toLowerCase());
    return flt;

}

function fuzzyMatch(arr, str){
    const flt = arr.filter(name => name[0] === str[0]);
    return flt;

}

function matchName(arr, str){
    let flt = arr.filter(obj=> obj.name === str);
    return flt;
}