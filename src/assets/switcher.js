$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {

        }
        else {
            $('.grid li').removeClass('two-per-row').addClass('three-per-row');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});
