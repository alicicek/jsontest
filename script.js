fetch('data.json')
  .then(response => {
    return response.json();
  })
  .then(function (data){
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });


function appendData(data)
{
  var container = document.getElementById("displayData")

  for (let i = 0; i < data.length; i++) 
  {
    var userDiv = document.createElement("user");
    var nameDiv = document.createElement("name");
    var ageDiv = document.createElement("age");
    var colourDiv = document.createElement("colour");

    userDiv.classList.add("userBox");
    nameDiv.classList.add("userField");
    ageDiv.classList.add("userField");
    colourDiv.classList.add("colourField");

    nameDiv.innerHTML = "Name: " + data[i].name;
    ageDiv.innerHTML = "Age: " + data[i].age;
    colourDiv.innerHTML = "Favourite colour";
    colourDiv.style.backgroundColor = data[i].colour;
    
    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(colourDiv);

    container.appendChild(userDiv);

  }

}

function addInput()
{
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var colour = document.getElementById("colour").value;

  console.log(name, age, colour);
}