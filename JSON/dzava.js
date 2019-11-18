var button = document.querySelector('button')

button.addEventListener('click', function () {

    var dodz = 'paspas'
    var sajt = 'https://dog.ceo/api/breeds/image/random'

    var ajax = new XMLHttpRequest()

    ajax.open('GET', sajt)

    ajax.addEventListener('load', function () {
        var data = JSON.parse(ajax.responseText)
        var img = data.message



        var link = document.createElement('a')   //stavi img da bi redjao na stranu 
        link.setAttribute('href', img)
        link.textContent = dodz

        document.querySelector('body')
            .append(link)


    })
    ajax.send()
})

