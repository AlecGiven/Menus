var counter = 5;

 //function listing(){
   // document.writeln("<br />")

for(var i in list){
     for(var j in list[i]){
       
       if (list[i][j]>25){ 
             
     document.getElementById('my-listing').innerHTML += list[i][j] + '<br/>';
          document.getElementById("my-listing").style.color = "green";
    }
     else{
document.getElementById('my-listing').innerHTML += list[i][j] + '<br/>';
  
    }
     }
}

 document.getElementById('my-output').innerHTML = counter + '<br/>';
  function increment(){
            counter++;
    document.getElementById('my-output').innerHTML = counter + '<br/>';
      // document.writeln(counter);     
        }
//<button onclick="changeColor()">Change color</button>
//document.getElementsByTagName("h1")[0].style.fontSize = "6vw";