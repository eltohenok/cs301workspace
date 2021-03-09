function reverse(str){
    return str.split("").reverse().join("");
}
function findSuffix(strs){
    if(!strs||strs.length===0){
        return null;
    }
    return reverse(findPrefix(strs.map(reverse)));
}