function searchColor(){

    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('colors');
    
    for(i=0; i<x.length; i++){

        if(!x[i].innerHTML.toLowerCase().includes(input)){

            x[i].style.display="none";
        }else{

            x[i].style.display="list-item";
            document.title = x[i].innerHTML;
        }
    }
}

let btn =document.getElementById('searchBtn');
btn.addEventListener('click',changeColor=()=>{
    if(btn.style.backgroundColor=="green"){
        btn.style.backgroundColor="#70707070";
    }else{
        btn.style.backgroundColor="green";
    }
});

function clearBtn(){
    let input = document.getElementById('searchbar').value="";
    searchColor();
}




