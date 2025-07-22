function valids() {
    let isValid = true;
    let n = document.getElementById("USERNAME").value;
    let np = document.getElementById("err");
    let p = /^[a-zA-Z. ]{3,20}$/;
    if (n.trim() === "") {
        np.innerHTML = "Enter your name.";
        isValid = false;
    } else if (!p.test(n)) {
        np.innerHTML = "Enter valid name.";
        isValid = false;
    } else {
        np.innerHTML = "";
    }
    let dob = document.getElementById("dob").value;
    let errDob = document.getElementById("errDob");
    if (dob === "") {
        errDob.innerHTML = "Select your date of birth.";
        isValid = false;
    } else {
        let selectDate = new Date(dob);
        let today = new Date();
        if (selectDate > today) {
            errDob.innerHTML = "Date of birth not valid.";
            isValid = false;
        } else {
            let age = today.getFullYear() - selectDate.getFullYear();
            let m = today.getMonth() - selectDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < selectDate.getDate())) {
                age--;
            }
            if (age < 18) {
                errDob.innerHTML = "You are not eligible.";
                isValid = false;
            } else {
                errDob.innerHTML = "";
            }
        }
    }
    let email = document.getElementById("email").value;
    let errEmail = document.getElementById("errEmail");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errEmail.innerHTML = "Enter your email address.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errEmail.innerHTML = "Enter valid email address.";
        isValid = false;
    } else {
        errEmail.innerHTML = "";
    }
    let number = document.getElementById("number").value;
    let errNum = document.getElementById("errNum");
    let numberPattern = /^[0-9]{10}$/;
    if (number === "") {
        errNum.innerHTML = "Enter your mobile number.";
        isValid = false;
    } else if (!numberPattern.test(number)) {
        errNum.innerHTML = "Enter valid mobile number.";
        isValid = false;
    } else {
        errNum.innerHTML = "";
    }
    let pass = document.getElementById("password").value;
    let errPass = document.getElementById("errPass");
    let passPattern = /^[a-zA-Z0-9@#$%^&*!]{8,16}$/;
    if (pass === "") {
        errPass.innerHTML = "Create password.";
        isValid = false;
    } else if (!passPattern.test(pass)) {
        errPass.innerHTML = "Invalid password.";
        isValid = false;
    } else {
        errPass.innerHTML = "";
    }
    let pass1 = document.getElementById("pass1").value;
    let errPass1 = document.getElementById("errPass1");
    if (pass1 === "") {
        errPass1.innerHTML = "Re-enter password.";
        isValid = false;
    } else if (pass1 !== pass) {
        errPass1.innerHTML = "Password do not match.";
        isValid = false;
    } else {
        errPass1.innerHTML = "";
    }
    let education = document.getElementById("education").value;
    let errEdu = document.getElementById("errEd");
    if (education === "") {
        errEdu.innerHTML = "Select any one.";
        isValid = false;
    } else {
        errEdu.innerHTML = "";
    }
    let account = document.getElementById("account").value;
    let errAccount = document.getElementById("errAccount");
    if (account === "") {
    errAccount.innerHTML = "Select an account type.";
    isValid = false;
    } else {
    errAccount.innerHTML = "";
    }
    let radios = document.getElementsByName("radioDefault");
    let errGender = document.getElementById("errGender");
    let genderSelected = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        errGender.innerHTML = "Select your gender.";
        isValid = false;
    } else {
        errGender.innerHTML = "";
    }
    let checkboxes = document.getElementsByName("service");
    let errService = document.getElementById("errService");
    let selectedServices = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedServices.push(checkboxes[i].value);
        }
    }
    if (selectedServices.length === 0) {
        errService.innerHTML = "Select at least one service.";
        isValid = false;
    } else {
        errService.innerHTML = "";
    }
    let idProof = document.getElementById("idProof").value;
    let errProof = document.getElementById("errProof");
    if (idProof === "") {
        errProof.innerHTML = "No files were selected.";
        isValid = false;
    } else {
        errProof.innerHTML = "";
    }

    return isValid;
}
