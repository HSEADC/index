import './index.css'
import $ from 'jquery'
window.$ = window.jQuery = $

$(document).ready(function () {
  $.ajax({
    url: './data.json', // Path to your JSON file
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#example').DataTable({
        data: data,
        columns: [
          { data: 'name' },
          { data: 'position' },
          { data: 'office' },
          { data: 'age' },
          { data: 'start_date' },
          { data: 'salary' }
        ]
      })
    },
    error: function (xhr, status, error) {
      console.error('Error fetching data:', error)
    }
  })
})
