function toTitleCase(str){
    return str.replace(function(text){
        return Text.charAt(0).toUpperCase()+Text.substr(1).toTitleCase();
    });
}
console.log(toTitleCase("henok"));