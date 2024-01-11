function display(){
    let userData = JSON.parse(localStorage.getItem("userdata"))??[];
    let myTable = document.getElementById("table");
    let rowCount = myTable.rows.length;
    for (var x=rowCount-1; x>0; x--) {
    myTable.deleteRow(x);
    }

    userData.forEach((element,idx) => {
        
        document.getElementById('table').innerHTML+=
        `<tr>
        <td>
            ${element.name}
        </td>
        <td>
            ${element.email}
        </td>
        <td>
            ${element.phone}
        </td>
        <td>
        <button onclick="remove(${idx})">Remove</button>
        </td>
    </tr>`
     
    });
}
function remove(index){
    let userData = JSON.parse(localStorage.getItem("userdata"))??[];
    userData.splice(index,1);
    localStorage.setItem("userdata",JSON.stringify(userData));
    display();
}
display();
