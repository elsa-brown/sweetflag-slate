// Popup overlay

$(document).ready(function() {
  var overlay = $('.signup-overlay');
  var cookie = Cookies.get('signup_popup');
  if (!cookie) {
   overlay.addClass('visible');
  } else {
   overlay.remove();
  }

  var $form = $('#mc-embedded-subscribe-form');
  var $button = $("#mc-embedded-subscribe");
  $button.addClass('test');
  if ( $form.length > 0 ) {
      console.log($form);
      console.log($button);
      $($button).bind('click', function ( event ) {
        console.log('clicked');
        console.log(validate_input($form));
          if (!validate_input($form)) {
            event.preventDefault();
          }
          watchForSuccess();
      });
  }

  function watchForSuccess() {
    console.log('watch');
    var successContainer = $("#mce-success-response");
    var errorContainer = $('#mce-error-response');
    var watchInt = setInterval(function(){
      if (errorContainer.text().length > 0) {
        clearInterval(watchInt);
      }
      if (successContainer.text().length > 0) {
          setTimeout(function(){
            $('.signup-container').addClass('success');
            setTimeout(function() {
              close_overlay();
            }, 1200);
            clearInterval(watchInt);
          }, 1000)
      }
    }, 300)
  }

  function register($form) {
      $.ajax({
          type        : $form.attr('method'),
          url         : $form.attr('action'),
          data        : $form.serialize(),
          cache       : false,
          dataType    : 'json',
          contentType : "application/json; charset=utf-8",
          error       : function(err) {
                  console.log(err);
              },
          success     : function(data) {
            console.log(data);
              if (data.result != "success") {
                  // Something went wrong, do something to notify the user. maybe alert(data.msg);
              } else {
                  // It worked, carry on...
              }
          }
      });
  }

  function validate_input($form) {
    var email = $form.find('input[type="email"]').val();
    // email regex
    console.log(email);
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (email.length == 0) {
      $('.mailing-list').addClass('has-errors email-error');
      $('.message').html('<p class="error">Enter an email address</p>');
      return false;
    } else if (!pattern.test(email)) {
      $('.mailing-list').addClass('has-errors email-error');
      $('.message').html('<p class="error">Enter a valid email address</p>');
      return false;
    } else {
      $('.mailing-list').removeClass('has-errors');
      $('.message').html('');
      $form.addClass('thinking');
      return true;
    }
  }


  $(".close-overlay").click(function() {
    close_overlay();
  })

  function close_overlay() {
    overlay.removeClass('visible');
    Cookies.set('signup_popup', 'true', { expires: 7 });
  }
})


$('')
