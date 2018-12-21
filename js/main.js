
$(document).ready(function () {
    $('li').click(
      function () {
        $('li').removeClass('active');
        $(this).addClass('active');
      }
    );
  })
  
