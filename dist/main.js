
$("#search").on('click', function(){
    const input = $('#input').val()
    $.ajax({
        type: "GET",
        url: `recipe/${input}`,
        success: function (response) {
            console.log( response )
        }
    });
})