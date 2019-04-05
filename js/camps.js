var cars = ["Phuket", "Chang Mai", "Island Hop", "Elephant","Trailblazers","Backpackers Party"];
var i = 0;
var text = "";

for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("camps").innerHTML = text;
