import $ from 'jquery'
import 'datatables.net'
import data from './data/data.json' // Ensure this path is correct
import './stylesheets/00_DataTables.css' // Ensure this path is correct
import '../src/index.css'

// Import images using Webpack's require syntax
const imagesContext = require.context(
  './images/datatable/',
  false,
  /\.(png|jpe?g|gif)$/
)

// Initialize DataTable when the DOM is ready
$(document).ready(function () {
  $('#main').DataTable({
    data: data, // Use the imported JSON data
    columns: [
      { data: 'name' },
      { data: 'country' },
      { data: 'program' },
      { data: 'portfolios' },
      { data: 'qs_ranking' },
      { data: 'image', visible: false } // Hidden column for image paths
    ],
    responsive: true, // Enable responsive behavior
    autoWidth: false, // Disable automatic column width
    language: {
      info: '_START_ - _END_ of _TOTAL_ entries',
      lengthMenu: 'Show _MENU_ entries',
      search: 'Search:',
      paginate: {
        previous: '‹',
        next: '›'
      }
    },
    dom: '<"top"f>rt<"bottom"lip><"clear">', // Custom table layout
    createdRow: function (row, data) {
      // Add hover functionality to each row
      $(row).hover(
        function () {
          try {
            // Get the correct image path using Webpack's require
            const imagePath = imagesContext(`./${data.image}`)

            // Create the preview overlay
            const $preview = $('<div class="image-preview-overlay">').html(
              `<img src="${imagePath}" class="image-preview">`
            )

            // Add preview to the DOM
            $('body').append($preview)
          } catch (error) {
            console.error('Error loading image:', error)
          }
        },
        function () {
          // Remove preview when mouse leaves
          $('.image-preview-overlay').remove()
        }
      )
    }
  })
})
