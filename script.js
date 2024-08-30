$(document).ready(function() {
    $("#myForm").validate({
        // Define validation rules
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            Email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        // Define custom messages
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            Email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        // Optionally, handle form submission
        submitHandler: function(form) {
            form.submit(); // Or use AJAX to submit the form
        }
    });
});
