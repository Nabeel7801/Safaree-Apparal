jQuery(document).ready(function() {


    $("#sendemail").click(function() {

        $("#error1").css("display", "none");
        $("#error2").css("display", "none");
        $("#error3").css("display", "none");

        var name = encodeURI($("#nameInput").val());
        var email = encodeURI($("#emailInput").val());
        var message = encodeURI($("#messageInput").val());

        var isValid = true;
        if (name == "") {
            $("#error1").css("display", "block");
            isValid = false;
        }
        if (email == "") {
            $("#error2").css("display", "block");
            isValid = false;
        } else {
            if (!ValidateEmail(email)) {
                $("#error3").css("display", "block");
                isValid = false;
            }
        }
        if (message == "") {
            $("#error4").css("display", "block");
            isValid = false;
        }

        if (isValid === true) {

            $("#hiddenArea").load("../sendmail/sendmail.php?name=" + name + "&email=" + email + "&message=" + message, function() {
                $("#nameInput").val("");
                $("#emailInput").val("");
                $("#messageInput").val("");

                if ($("#hiddenStatus").html() == "sent") {
                    $("#sendemail").html("SENT");
                    $("#sendemail").css("background-color", "lightgreen");
                    setTimeout(function() {
                        $("#sendemail").html("SEND");
                        $("#sendemail").css("background-color", "#E0877F");
                    }, 2000);
                }
            });

        }
    });

    function ValidateEmail(email) {
        var valid = false;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mailformat.test(email))
            valid = true;

        return valid;

    }


})