import $ from 'jquery'
import 'datatables.net'
import data from './data/data.json'
import './stylesheets/00_DataTables.css'
import '../src/index.css'

const imagesContext = require.context(
  './images/datatable/',
  false,
  /\.(png|jpe?g|gif)$/
)

$(document).ready(function () {
  let currentImagePath = null

  $('#main').DataTable({
    data: data,
    columns: [
      { data: 'name' },
      { data: 'country' },
      { data: 'program' },
      { data: 'portfolios' },
      { data: 'qs_ranking' },
      { data: 'image', visible: false }
    ],
    responsive: true,
    autoWidth: false,
    language: {
      info: '_START_ - _END_ of _TOTAL_ entries',
      lengthMenu: 'Show _MENU_ entries',
      search: 'Search:',
      paginate: {
        previous: '‹',
        next: '›'
      }
    },
    dom: '<"top"f>rt<"bottom"lip><"clear">',
    createdRow: function (row, data) {
      $(row).hover(
        function () {
          const imagePath = imagesContext(`./${data.image}`)

          if (currentImagePath !== imagePath) {
            currentImagePath = imagePath

            $('.image-preview').remove()

            const $preview = $(`<img src="${imagePath}" class="image-preview">`)
            $('body').append($preview)

            positionImage($preview)
          }
        },
        function () {}
      )
    }
  })

  $(window).resize(function () {
    positionImage($('.image-preview'))
  })

  function positionImage($img) {
    if ($img.length) {
      const windowHeight = $(window).height()
      const windowWidth = $(window).width()
      const imgHeight = $img.height()
      const imgWidth = $img.width()

      $img.css({
        position: 'fixed',
        top: (windowHeight - imgHeight) / 2,
        left: (windowWidth - imgWidth) / 2,
        zIndex: 1000
      })
    }
  }
})
