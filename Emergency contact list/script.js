// let nam = document.getElementById('name').value;
// let number = document.getElementById('number').value;

// let contact = {
//     "name": nam,
//     "number": number,
// }

let contactList = [];

function addnumber() {

    let nam = document.getElementById('name').value;
    let number = document.getElementById('number').value;

    let contact = {
        "name": nam,
        "number": number,
    }

    contactList.push(contact);
    alert("Number Added Suceesfully!");


    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
}



function showlist()
{


    contactList.forEach(value => {

        let contactInfo = document.createElement('p');

                                           

        contactInfo.textContent = `${value.name} : ${value.number}`;
        document.getElementById('list').appendChild(contactInfo);

    });
    
}