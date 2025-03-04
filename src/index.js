import $ from 'jquery'
import 'datatables.net'
import data from './data/data.json'
import './stylesheets/00_DataTables.css'
import '../src/index.css'

$(document).ready(function () {
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
      search: '', // Removed label from dt-search
      paginate: {
        previous: '‹',
        next: '›'
      }
    },
    dom: '<"top"f>rt<"bottom"lip><"clear">'
  })
})
