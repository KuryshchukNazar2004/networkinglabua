let typed = new Typed('#typed',{
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    loop: true,
    stringsElement: '#typed-strings'
});
// TABS
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const tabsBack = document.querySelectorAll('[data-tab-target-back]')
const tabContentsBack = document.querySelectorAll('[data-tab-content-back')

tabsBack.forEach(tabBack => {
    tabBack.addEventListener('click', () => {
        const targetBack = document.querySelector(tabBack.dataset.tabTargetBack)
        tabContentsBack.forEach(tabContentBack => {
            tabContentBack.classList.remove('active')
        })
        tabsBack.forEach(tabBack => {
            tabBack.classList.remove('active')
        })
        tabBack.classList.add('active')
        targetBack.classList.add('active')
    })
})


const tabsFront = document.querySelectorAll('[data-tab-target-front]')
const tabContentsFront = document.querySelectorAll('[data-tab-content-front')

tabsFront.forEach(tabFront => {
    tabFront.addEventListener('click', () => {
        const targetFront = document.querySelector(tabFront.dataset.tabTargetFront)
        tabContentsFront.forEach(tabContentFront => {
            tabContentFront.classList.remove('active')
        })
        tabsFront.forEach(tabFront => {
            tabFront.classList.remove('active')
        })
        tabFront.classList.add('active')
        targetFront.classList.add('active')
    })
})

// SCROLL
