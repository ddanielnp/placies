$(function () {
  const $placeSearch = $('#placeSearch')
  const apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  const keyword = ''
  const apiKey = '&key=AIzaSyCJI96sDWnzU2qSfxhJYR_R6pUgaNbT4P4'
  const $ul = $('ul')

  $placeSearch.on('submit', function (e) {
    e.preventDefault()
    var keyword = $(this).serializeArray()
    var qString = `query=${keyword[0].value}`
    var replaced = qString.replace(' ', '+')
    var finalUrl = `https://crossorigin.me/${apiUrl}${replaced}${apiKey}`

    $.get(finalUrl)
    .done(function (data) {
      for (var i = 0; i < data.results.length; i++) {
      // var link = obj[i].poster_path
        var $newLi = $('<li>')
      // var $newImg = $('<img>')
      // $newImg.attr('src', image_url + link)
        $newLi.append(data.results[i].name)
        $ul.append($newLi)
      // $appendList.append($newImg)
      }
    })
  })
})
