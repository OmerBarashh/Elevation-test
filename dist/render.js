const source = $('#template').html()
const template = Handlebars.compile(source)
function renderer() {
    function render(arr) {
        container.empty()
        const newHtml = template({ results: arr })
        container.append(newHtml)
    }
    return {
        render
    }
}
