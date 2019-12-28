/**
 * Subscribe by forwarding to Zapier
 */

$("#subscribe__submit").click(() => {
  if (
    $(".subscribe__input")[0].val() != "" &&
    isEmail($(".subscribe__input")[0].val())
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
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
