document.querySelector('input').addEventListener('change', function() {
    this.previousElementSibling.style.width = this.value + 'px'
})