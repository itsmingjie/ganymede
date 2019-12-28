/**
 * Subscribe by forwarding to Zapier
 */

function isEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$("#subscribe__submit").click(() => {
  if (
    $(".subscribe__input")
      .eq(0)
      .val() !== "" &&
    isEmail(
      $(".subscribe__input")
        .eq(1)
        .val()
    )
  ) {
    $.ajax({
      url: "https://hooks.zapier.com/hooks/catch/2085782/otichcc/",
      type: "post",
      data: $("#subscribe__form").serialize(),
      success() {
        $("#subscribe__form").hide();
        $("#subscribe__title").text("Thanks for subscribing!");
      }
    });
  }
});
