function onFormSubmit() {
  var formData = readFormData();

  var Datavalidate = onValidate(formData);
    if (Datavalidate == true)
    {
    insertNewRecord(formData);
  //To reset the form with empty  space
    resetForm();
    }
}

// to read the data
function readFormData() {
  const formData = {};

  formData["fullname"] = document.getElementById("fullname").value;
  formData["lastname"] = document.getElementById("lastname").value;
  formData["Address"] = document.getElementById("Address").value;
  formData["Gender"] = document.getElementById("Gender").value;
  formData["State"] = document.getElementById("State").value;
  formData["Country"] = document.getElementById("Country").value;

  var obj = myForm.myOption,
        options = obj.options, 
        selected = [], i, str;
    
    for (i = 0; i < options.length; i++) {
        options[i].selected && selected.push(obj[i].value);
    }
    str = selected.join();
    if(selected.length > 1) 
    {
      formData["ChoiceOfFood"] = str;
    }
    else formData["ChoiceOfFood"] = "";
  return formData;
}

// To insert record
function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];

  //insert row
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Gender;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.ChoiceOfFood;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.State;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.Country;
}

// Resetting form
function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Gender").value = "";
  document.getElementById("ChoiceOfFood").value = "";
  document.getElementById("State").value = "";
  document.getElementById("Country").value = "";
  selectedRow = null;
}

// Validating all fields are filled
function onValidate(Data){
    if(Data.fullname && Data.lastname && Data.Address && Data.Gender && Data.ChoiceOfFood && Data.State && Data.Country)
    {
      
        return true;
    }
    else{
      alert("Enter all details and select minimum 2 Foods recipe");
        return false;
    }
}