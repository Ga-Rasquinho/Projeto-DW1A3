$(document).ready(function () {
  $(".growImage")
    .mouseover(function () {
      $(this)
        .stop()
        .animate({ width: "93%", left: "0px", top: "0px" }, 400, "swing");
    })
    .mouseout(function () {
      $(this)
        .stop()
        .animate({ width: "80%", left: "15px", top: "15px" }, 200, "swing");
    });
});
