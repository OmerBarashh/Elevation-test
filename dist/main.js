const rendering = render()

$("#search").on('click', function(){
    const input = $('#input').val()
    $.ajax({
        type: "GET",
        url: `recipe/${input}`,
        success: function (response) {
            rendering.render(response)
        }
    });
})