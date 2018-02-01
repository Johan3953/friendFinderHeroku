function getMatches() {

    //validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === " ") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function () {

            if ($(this).val() === " ") {
                isValid = false;
            }
        });
        return isValid;
    }

    // all questions answered
    if (validateForm() === true) {
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: []
        };
        $(".container select").each(function () {
            userData.scores.push($(this).val());
        });
        // AJAX post the data to the friends API. 
        $.post("/api/friends", userData, function (data) {
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);

            $("#resultsModal").modal("toggle");

        });
    } else {
        alert("Please fill out all yhe questions before submitting!");
    }

    return false;
}

$("#submit").on("click", getMatches);
