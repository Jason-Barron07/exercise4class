let person = {

    name:"Jason",
    surname:"Barron",
    age:19,


}


const content =document.querySelector(".table-content")
content.innerHTML=`

<th>Name</th>
<th>Surname</th>
<th>Age</th>

<tr>
<td>${person.name}</td>
<td>${person.surname}</td>
<td>${person.age}</td>
</tr>

`;