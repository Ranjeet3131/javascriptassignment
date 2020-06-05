function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Ranjeet");
    var password = prompt("Please enter the password:");
    if (person == null || person == "") {
        alert("Name can't be blank");  
        return false;
    } 
    else if(password.length<6){  
        alert("Error! please enter a valid password");  
        return false;  
        }  
    else{
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }
