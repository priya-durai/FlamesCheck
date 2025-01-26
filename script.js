var name1="Diya"
var name2="Priya"
var array1=Array.from(name1.replace(" ","").toLowerCase());
var array2=Array.from(name2.replace(" ","").toLowerCase());
var count=array1.length+array2.length;
var flag=false;
array1.forEach((letter)=>{
  flag=false;
  array2.forEach((el,index)=>{
      if(flag==true){
          return;
      }
    if(el===letter){
      count=count-2;
      array2.splice(index,1);
      flag=true;
    }
  }
  );
}
);
console.log(count);

var word="flames";
var index=0
var arrayWord=Array.from(word);
while(arrayWord.length>1){
    if(count>arrayWord.length){
        var total=count%arrayWord.length;
        arrayWord.splice(total-1,1);
        if(total-1>0){
            while(total>1){
                var alt=arrayWord[index]
                arrayWord.shift();
                arrayWord.push(alt);
                console.log(arrayWord);
                total--;
            }   
        }
        console.log(arrayWord);
    }
    else{
        var localCount=count;
        var total=localCount%arrayWord.length;
        arrayWord.splice(localCount-1,1);
        if(localCount-1>0){
            while(localCount-1>0){
                var alt=arrayWord[index]
                arrayWord.shift();
                arrayWord.push(alt);
                localCount--;
            }
        }
        console.log(arrayWord);
    }
}
