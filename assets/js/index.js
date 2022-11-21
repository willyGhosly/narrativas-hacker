'use strict'

accordeon()
function accordeon() {
    const blocks = document.querySelectorAll('.accordeon__block')
    const contents = document.querySelectorAll('.accordeon__content')
    if (blocks && contents) {
        blocks.forEach(block => {
            const barToClick = block.querySelector('.accordeon__title')
            const content = block.querySelector('.accordeon__content')
            barToClick.onclick = () => {
                contents.forEach(c => [
                    c.classList.remove('active')
                ])
                content.classList.add('active')
            }
        })
    }
}