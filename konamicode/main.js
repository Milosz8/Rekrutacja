var pressed = [];
const konamiCode = 'injects3cretsEnter';
window.addEventListener('keyup',(e)=>{
    
    let timer;
    const runTimer = () => {
        
        timer = setTimeout(function reloadPressed(){pressed=['']; console.log(pressed.join(''))},5000);
    }
    runTimer();
    window.addEventListener('keyup',(elo) => {
        window.clearTimeout(timer);
        runTimer();
    })

    
    pressed.push(e.key);
    pressed.splice(-konamiCode.length -1, pressed.length - konamiCode.length);

    if(pressed.join('').includes(konamiCode)){
        pressed=[''];
        displayApi();
        fetchData();
        setTimeout(function reloadWindow(){window.location.reload();},15000);
    }else if(pressed.join('').includes('Escape')){
        pressed=[''];
    }  
})

const displayApi = () => {
    const tohide = document.getElementById('tohide');
    const hidden = document.getElementById('hidden');
    tohide.style.display="none";
    hidden.style.backgroundColor="red";
    hidden.style.fontFamily="arial";
    hidden.style.fontSize="8px";
    hidden.style.display="flex";
    hidden.style.height="4000%";
    hidden.style.display="block";
    

    
}

async function fetchData(){

    fetch('https://api.github.com/repos/elixir-lang/elixir/issues')
    .then(res => res.json())
    .then(res => {
        
        const tabLength=5;
        //console.log(res);

        //sortowanie dat
        const sortable = Object.entries(res);

        sortable.sort((a, b) => {
            return Date.parse(a[1]?.created_at) - Date.parse(b[1]?.created_at);
        });

         
        const sortable2 = Object.fromEntries(sortable);
        //console.log(sortable);
        for(let i = 0;i<tabLength;i++){
            const login = sortable2[i].user.login;
            const title = sortable2[i].title;
            const anchor = document.createElement("h1");
            anchor.textContent = login;
            const anchor2 = document.createElement("p");
            anchor2.textContent = title;
            hidden.appendChild(anchor);
            hidden.appendChild(document.createElement("br"));
            hidden.appendChild(anchor2);
            hidden.appendChild(document.createElement("br"));
            
        }

    })
    
}






