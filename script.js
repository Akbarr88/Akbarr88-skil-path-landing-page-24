//6
function handleGetFormData() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;

    return { name, city, email, zipCode, status };
}

//7
function isNumber(value) {
    return !isNaN(value);
}

//8
function checkboxIsChecked() {
    let statusCheckbox = document.getElementById("status");
    let isChecked = statusCheckbox.checked;
    return isChecked;
}

//9
function validateFormData(formData) {
    if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}

//10
function submit() {
    const formData = handleGetFormData()
    
    if (validateFormData(formData)) {
        document.getElementById('warning').textContent = '';
    } else {
        document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
    }
}
document.getElementById('myForm').addEventListener('submit', submit);

