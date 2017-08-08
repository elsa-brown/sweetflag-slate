$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".responseClass").css("float") == "none" ){
        console.log('small');
    }
    else {

        console.log('large');

    }
}
