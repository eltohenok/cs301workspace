function revString(str){
    if(str===""){
      return "";
    }else{
      return revString(str.substring(1))+str.substring(0,1);
    }
    }
    console.log(revString("henok"));
    
    
    