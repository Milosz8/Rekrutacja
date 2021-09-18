var inputText = document.getElementById("name");
var $x = "";


var demo2 = () => {
    
    if(inputText.value!==""){
    
    const el = document.createElement("p");
    
    el.style.color = "red";
    el.style.float = "left";
    el.style.cursor = "pointer";
    el.setAttribute("id","par1");
    el.setAttribute("onclick","createInput()");
    document.body.appendChild(el);
    el.textContent=inputText.value;
    //console.log(el.textContent);
    inputText.style.display ="none";
    
    $x=inputText.value;
    //console.log($x);
    }else{
        placeholder();
    }
  
}

inputText.addEventListener("keydown",function(event){
    if (event.code === "Enter" && inputText.value!=="") {
        demo2();
        const removePar= document.querySelector("p");
        removePar.remove();
    }
})

inputText.addEventListener("click",placeholder());

function placeholder() {
    inputText.value=inputText.placeholder;
}


var createInput=()=>{
    
    
    var el1 = document.createElement("input");
    
    inputText.style.display="inline";
    el1.value=$x;
    //console.log(el1.value);
    
    const removePar= document.querySelector("p");
    removePar.remove();
    
   

}
