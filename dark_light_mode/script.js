let modebtn = document.getElementById("btn");

let body = document.querySelector("body");

let heading = document.getElementById("heading");

let curmode = "light";
heading.style.color = "blue";

modebtn.addEventListener('click',()=>
{
    if(curmode == "light")
    {
        curmode="dark";
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        
    }

    else{
        curmode="light";
        body.style.backgroundColor = "white";
        heading.style.color = "blue";

    }

})


