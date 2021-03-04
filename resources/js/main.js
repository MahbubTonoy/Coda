//Bismillahi Rahmanir Rahim

$(document).ready(function () {
  $("[href='#home']").click(function () {
    $("#navigation").removeClass("sticky");
  });
  $(".js--sticky").waypoint(function (direction) {
    if (direction == "down") {
      $("#navigation").addClass("sticky");
      $(".bars").addClass("stickybars");
    }
    else {
      $("#navigation").removeClass("sticky");
      $(".bars").removeClass("stickybars");
    }
  });

  $(".mobilebars a").click(function () {
    $("#check").prop("checked", false);
  });

  var mixer = mixitup('.makemix');
});

