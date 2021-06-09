function sendEmail(){
     let form = document.getElementById('sendmsg').value;
    let fullname = form.elements['name'];
    let userEmail = form.elements['email'];
    let userMessage = form.elements['message'];
    
    let fullname = name.value;
    let userEmail = email.value;
    let userMessage = message.value;
    
    var contactparameters = {
        from_name : fullname,
        from_email : userEmail,
        from_msg : userMessage
    }; 
    
    function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}
    function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}
    function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}
    function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}
    const form = document.getElementById('emailMSG');
    const name = form.elements[0];
    const email = form.elements[1];
    const message =form.elements[2];


const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email,message: 'Email is required'},
    {text: message,message:'Message is required'}
];
    
  form.addEventListener('submit', (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});

}