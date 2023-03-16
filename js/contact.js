let form = document.querySelector('form');
form.addEventListener('submit', event => {
    let name = '';
    if(form.elements.name.value){
        name = form.elements.name.value;
    }
    else {
        name = 'no submission';
    }
    let email = '';
    if(form.elements.email.value){
        email = form.elements.email.value;
    }
    else {
        email = 'no submission';
    }
    let message = '';
    if(form.elements.message.value){
        message = form.elements.message.value;
    }
    else {
        message = 'no submission';
    }
    let response = `========= Form Submission =========
    Name: ${name}
    Email: ${email}
    Message: ${message}`;
    if(!(name == 'no submission') || !(email == 'no submission') || !(message == 'no submission')){
        console.log(response);
    }
    else{
        console.warn('You must enter some data to submit this form')
    }
    event.preventDefault();
})