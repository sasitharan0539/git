function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var dob = document.forms[0]["dob"].value;
    var mobile = document.forms[0]["mobile"].value;

    if (name === "" || email === "" || dob === "" || mobile === "") {
        alert("All fields are required!");
        return false;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    alert("Login successful!");
    return true; 
}
