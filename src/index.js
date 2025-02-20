import './index.css'
import $ from 'jquery'
import data from './data/data.json' // Direct JSON import

window.$ = window.jQuery = $

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
