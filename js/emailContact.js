(function(){
    emailjs.init("ABnVIytnh7mnjAaLi");
 })();


window.onload = function() {
    
    
    document.getElementById('contact-Form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_4zl5pmj', 'template_354c2qq', this)
            .then(function() {
                //Handles form clearing and disabling after a successful email call 
                console.log('SUCCESS!');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                document.getElementById('submitButton').classList.add('disabled');
                document.getElementById('submitSuccessMessage').classList.remove('d-none');


            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}