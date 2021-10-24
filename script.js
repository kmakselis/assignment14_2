var table = document.getElementById('tbody');
var name2 = document.getElementById('name2');
var surname = document.getElementById('surname');
var number = document.getElementById('number');
var add = document.getElementById('add');
var remove = document.getElementById('remove');
var removeLast = document.getElementById('removeLast');

add.addEventListener("click", function(){
if (surname.value && number.value && number.value > 0) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    cell1.innerText = name.value;
    cell2.innerText = surname.value;
    cell3.innerText = number.value;
    row.append(cell1);
    row.append(cell2);
    row.append(cell3);
    tbody.append(row);
    name.value = "";
    surname.value = "";
    number.value = "";
} else {
  alert("įveskite duomenis");
}
});

remove.addEventListener("click", function(){
  var removeFirstRow = document.getElementsByTagName('tr');
  if(removeFirstRow.length && removeFirstRow.length > 1){
  removeFirstRow[removeFirstRow.length - removeFirstRow.length + 1].remove();
} else {
  alert("Nebėra ką trinti");
}
});

removeLast.addEventListener("click", function(){
  var removeRow = document.getElementsByTagName('tr');
  if(removeRow.length && removeRow.length > 1){
  removeRow[removeRow.length - 1].remove();
} else {
  alert("Nebėra ką trinti");
}
});



// var cellText1 = document.createTextNode(name.value);
// var cellText2 = document.createTextNode(surname.value);
// var cellText3 = document.createTextNode(number.value);
// cell1.append(cellText1);
// cell2.append(cellText2);
// cell3.append(cellText3);

// add.addEventListener("click", function(){
//   if(name.value){
//     var row = document.createElement("tr");
//     var cell = document.createElement("td");
//     td.innerText = name.value;
//     cell.append(cellText);
//     row.append(cell);
//     tbody.append(row);
//   }
// });


//
// add.addEventListener("click", function(){
//   if(name.value && surname.value && number.value){
//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
//     var tdText1 = document.createTextNode(name.value);
//     var tdText2 = document.createTextNode(surname.value);
//     var tdText3 = document.createTextNode(number.value);
//     td.append(tdText1);
//     td.append(tdText2);
//     td.append(tdText3);
//     tr.append(td);
//   }
// });
