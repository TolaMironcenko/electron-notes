const resizer = document.querySelector('.resizer')
resizer.addEventListener('mousedown', initDrag, false)

var startX, startY, startWidth, startHeight
var defaultwidth = notes_square.style.width

function initDrag(e) {
    startX = e.clientX
    startWidth = parseInt(
        document.defaultView.getComputedStyle(notes_square).width,
        10
      );
    document.documentElement.addEventListener('mousemove', doDrag, false)
    document.documentElement.addEventListener('mouseup', stopDrag, false)
 }

 function doDrag(e) {
    notes_square.style.width = startWidth + e.clientX - startX + "px"
    console.log(notes_square.style.width + '\n')
    console.log(e.clientX)
 }

 function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false)
    document.documentElement.removeEventListener('mouseup', stopDrag, false)
}