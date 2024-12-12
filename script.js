$(document).ready(function() {
    $("#contact-form").on("submit", function(e) {
        e.preventDefault();
        
        let name = $("#name").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let message = $("#message").val();
        
        if (name && email && subject && message) {
            alert("Message sent successfully!");
            // You can integrate a real email service here
        } else {
            alert("Please fill in all fields!");
        }
    });
});