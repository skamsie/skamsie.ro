// using mediaCheck jQuery plugin
// toggle sidebar when clicking on links only on small displays

$(function() {

  var smallScreen = false;

  mediaCheck({
    media: '(max-width: 991px)',
    entry: function() {
    smallScreen = true;
    },
    exit: function() {
      smallScreen = false;
    }
  });

  $(".hideme").click(function () {
    if (smallScreen == true) {
      $('.navbar-toggle').trigger('click');
    }
  });

});

/*
$(document).ready(function() {
    $("#lesen").click(function() {
        $.ajax({
            url : "primul.html",
            dataType: "html",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
});
*/
