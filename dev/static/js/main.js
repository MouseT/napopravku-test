document.addEventListener('DOMContentLoaded', function () {
  const modalButton = document.querySelector('.js-open-modal')
  const overlay = document.querySelector('#overlay-modal')
  const closeButton = document.querySelector('.js-modal-close')
  const form = document.querySelector('.form')
  modalButton.addEventListener('click', function (e) {
    e.preventDefault()
    const modalElem = document.querySelector('.modal')
    modalElem.classList.add('active')
    overlay.classList.add('active')
    window.scrollTo(0, 0)
  })
  closeButton.addEventListener('click', function (e) {
    const parentModal = document.querySelector('.modal')
    parentModal.classList.remove('active')
    overlay.classList.remove('active')
  })
  overlay.addEventListener('click', function (e) {
    const parentModal = document.querySelector('.modal')
    parentModal.classList.remove('active')
    overlay.classList.remove('active')
  })
  form.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  })
})

new Vue({
  el: '.app',
  data: {
    deseases: [],
    input: ''
  },
  methods: {
    add () {
      if (this.input !== '') {
        this.deseases.push(this.input)
        this.input = ''
      }
    },
    remove (item) {
      this.deseases.splice(this.deseases.indexOf(item), 1)
    }
  }
})
