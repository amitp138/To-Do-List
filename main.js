function addtask(){
let input=document.getElementById("inp1");
let todotask=document.getElementById("todotask");
let item=document.getElementById("inp1");
if(item.value =="" ){
    alert("pls add your task..");
}
else{
    let create_li=document.createElement("li");
   
    create_li.appendChild(document.createTextNode(item.value));
    let span = document.createElement("SPAN");
    span.className = "close"
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);


    todotask.appendChild(create_li);
    create_li.appendChild(span);
    item.value="";

    create_li.onclick = function(){
        this.parentNode.removeChild(this);
      }
 }
 }

     
    
 


