import data from './data/data.json'
console.log(data) // Expect an array of objects

import './index.css'
import $ from 'jquery'
import 'datatables.net'

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
