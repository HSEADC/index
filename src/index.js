import $ from 'jquery'
import 'datatables.net'
import data from './data/data.json'
import './stylesheets/04_Layouts/00_DataTables.css'
import '../src/index.css'
import initEvents from './scripts/events.js'
import initGlobe from './scripts/globe.js'

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
      lengthMenu: 'Show _MENU_',
      search: '',
      searchPlaceholder: 'Поиск',
      paginate: {
        previous: '‹',
        next: '›'
      }
    },
    dom: '<"top"f>rt<"bottom"lp><"clear">' // Removed dt-info from dom
  })

  // Add text-h4 class to dt-input
  $('.dt-input').addClass('input-large')
  $('.dt-input').addClass('text-h3')

  initGlobe()
  initEvents()
})
