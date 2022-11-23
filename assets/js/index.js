'use strict'

function jump(hash) {
    let url = location.href
    location.href = "#" + hash
    history.replaceState(null, null, url)
}

function accordeon() {
    const blocks = document.querySelectorAll('.accordeon__block')
    const contents = document.querySelectorAll('.accordeon__content')
    const navBarItems = document.querySelectorAll('.header__link--accordeon')
    if (blocks && contents) {
        blocks.forEach((block, index) => {
            const barToClick = block.querySelector('.accordeon__title')
            const content = block.querySelector('.accordeon__content')
            barToClick.onclick = () => {
                if (content.classList.contains('active')) {
                    content.classList.remove('active')
                } else {
                    contents.forEach(content => {
                        content.classList.remove('active')
                    })
                    content.classList.add('active')
                    setTimeout(() => {
                        jump(`home_acc_block--${index + 1}`)
                    }, 100)
                }
            }
        })
    }
    // if (navBarItems && contents) {
    //     navBarItems.forEach((item, index) => {
    //         item.onclick = (e) => {
    //             e.preventDefault()
    //             console.log(e)
    //             if (contents[index].classList.contains('active')) {
    //                 contents[index].classList.remove('active')
    //             } else {
    //                 contents.forEach(content => {
    //                     content.classList.remove('active')
    //                 })
    //                 contents[index].classList.add('active')
    //                 setTimeout(() => {
    //                     jump(`home_acc_block--${index + 1}`)
    //                 }, 100)
    //             }
    //         }
    //     })
    // }
}

/** Load Functions */
accordeon()