function checkSpam(str){
    let lowerStr=str.toLowerCase();
    return lowerStr.includes("vigra")||lowerStr.includes("xxx")
}
console.log(checkSpam("butViAgRa now"));