const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const country = document.getElementById('country');
const postcode = document.getElementById('postcode')
const password = document.getElementById('pword');
const confirmPassword = document.getElementById('cpword');


form.addEventListener('submit', (e) => {
    if (!email.checkValidity() || !country.checkValidity() || !postcode.checkValidity()
        || !password.checkValidity() || !confirmPassword.checkValidity()) {
        alert('Please fill in all required fields highlighted in red')
    } else if (password.value != confirmPassword.value) {
        alert('Passwords do not match')
        e.preventDefault();
    } else {
        alert('nice');
    }
});

validityListener(email);
validityListener(country);
validityListener(postcode);
validityListener(password);

function validityListener(input) {
    input.addEventListener('change', () => {
        if (!input.checkValidity()) {
            input.reportValidity();
        }
    })
}

confirmPassword.addEventListener('change', () => {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity('passwords must match');
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.reportValidity();
    }
});