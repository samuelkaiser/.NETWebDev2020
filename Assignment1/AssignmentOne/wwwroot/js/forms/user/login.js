$(document).ready(function () {
    /**
     * Basic jQuery form handling in case Northwind employees/customers 
     * will need to be able to longin.
     * 
     * There is not currently an endpoint so this script just bundles up user data into a JSON string
     * upon form submission.
     * 
     * It also handles some very basic validation as a starting point for handling sloppier errors 
     * without reloading the page.
     **/
    const loginForm = $('#userLoginForm');
    
    $('#userLoginForm').on('submit', function (e) {
        // handle error messages when attempt fails multiple times
        $('span.form-errors').remove();

        e.preventDefault();
        console.log("testing");

        // get the deets
        let userNameOrEmail = $('#userNameOrEmail').val();
        let password = $('#password').val();
        let submittedFields = {};
        let request = {};
        let errors = {};

        // do a lazy check for email vs username
        if (userNameOrEmail.split('@').length == 2) {
            console.log("Request is email based");
            request.email = userNameOrEmail;
        } else {
            if ((userNameOrEmail.length <= 16 && userNameOrEmail.length >= 5)) {
                request.username = userNameOrEmail;
            } else {
                errors.usernameOrEmail = "Usernames must be at least 5 characters and no more than 16.";
            }
        }

        // because they should never be too short (personally I think 8 is already cutting it way low)
        if (password.length < 8) {
            errors.password = "The password is invalid.";
        } else {
            request.password = password;
        }

        // check for errors and display
        (errors.usernameOrEmail) ? $("label[for='userNameOrEmail']").prepend("<span class='form-errors text-danger'>" + errors.usernameOrEmail + "</span>") : console.log('user/email all good');
        (errors.password) ? $("label[for='password']").prepend("<span class='form-errors text-danger '>" + errors.password + "</span>") : console.log('password all good');

        // a quick print of the JSON I hope to be able to pass to my .NET endpoint
        console.log(JSON.stringify(request));
    });
}); 