/**
 * Subscribe by forwarding to Zapier
 */

$("#subscribe__submit").click(() => {
  if (
    $(".subscribe__input").eq(0).val() != "" &&
    isEmail($(".subscribe__input").eq(1).val())
  ) {
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/2085782/otichcc/",
      type: "post",
      data: $("#subscribe__form").serialize(),
      success: function() {
        $("#subscribe__form").hide();
        $("#subscribe__title").text("Thanks for subscribing!");
      }
    });
  } else {
    if ($(".subscribe__input").eq(0).val() == "") {
        $(".subscribe__input").eq(0).css("border-bottom", "1px solid #FF0000;")
    } else {
        $(".subscribe__input").eq(1).css("border-bottom", "1px solid #FF0000;")
    }
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
