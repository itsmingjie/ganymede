/**
 * Subscribe by forwarding to Zapier
 */

$('#subscribe__submit').click(() => {
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2085782/otichcc/',
        type:'post',
        data:$('#subscribe__form').serialize(),
        success:function(){
            $("#subscribe__form").hide()
            $("#subscribe__title").text("Thanks for subscribing!")
        }
    })
})