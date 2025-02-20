import './index.css'
import $ from 'jquery'
window.$ = window.jQuery = $

fetch('./data/data.json') // Updated path
  .then((response) => response.json())
  .then((data) => {
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
  })
  .catch((error) => {
    console.error('Error fetching data:', error)
  })
