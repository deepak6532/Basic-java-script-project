// let task = document.getElementById("task");

// function add(){
//     let ul = document.getElementById("item");
//     let li = document.createElement("item");
//     li.appendChild(document.createTextNode(task.value));
//     ul.appendChild(li);
//     task.value = "";

// }



let task = document.getElementById("task");
function add()
{
    if(task.value == "")
    {
        alert("Please enter a task");
     
    }
    else
    {
        let arr = [];
        arr.push(task.value)

                                 // document.getElementById("item").innerHTML += task.value;
                                                    
       document.getElementById("item").innerHTML += `<div id="item">${arr}</div>`;

    }
    
    task.value = "";
}



