export class Slinky {
    constructor(selector, options = {}) {
        this.$menu = document.querySelectorAll(selector);
        this.titleMenuSelector = options.titleMenuSelector || '.slinky-title'
        this.nextButtonSelector = options.nextButtonSelector || '.slinky-next'
        this.backButtonSelector = options.backButtonSelector || '.slinky-back'
        this.parentSelector = options.parentSelector || '.menu-parent'
        this.childSelector = options.childSelector || '.menu-child'
        this.transitionSpeed = options.transitionSpeed || '300'
        this.defaultTitle = options.defaultTitle || 'Menu'
        this.openedClass = options.openedClass || 'opened'
        this.showBtnClass = options.showBtnClass || 'show'

        this.isOpen = false
        this.depth = 0

        this.init();
    }

    init() {
        const nextButton = document.querySelectorAll(this.nextButtonSelector);
        const backButton = document.querySelectorAll(this.backButtonSelector);

        this.bindEvents(nextButton,backButton);
    }

    bindEvents(nextButton,backButton) {
        backButton.forEach(button => {
            button.addEventListener('click', () => this.backMenu());
        })
        nextButton.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault()
                this.changeMenu(button.nextElementSibling)
            });
        })
    }

    changeOpened(depth) {
        this.depth += depth
        
        if (this.depth !== 0) {
            this.isOpen = true
        } else {
            this.isOpen = false
        }
    }

    backMenu() {
        this.$menu.forEach(menu => {
            const openedElement = menu.querySelector(`.${this.openedClass}`);
            const parentTitle = openedElement.parentElement.parentElement.parentElement.dataset.title || this.defaultTitle;

            this.changeOpened(-1);
            this.changeTitle(parentTitle);
            this.transformMenu(openedElement, 'prev');
        })
    }

    changeMenu(childMenu) {
        this.changeOpened(1);

        this.changeTitle(childMenu.dataset.title);
        this.transformMenu(childMenu, 'next');
    }

    transformMenu(childMenu, status) {
        const transform = this.depth * 100;

        switch(status) {
            case 'next':
                this.$menu.forEach(menu => {
                    menu.style.transition = `transform ${this.transitionSpeed}ms`;
                    menu.style.transform = `translateX(-${transform}%)`;
                    childMenu.style.display = 'block';
                    menu.style.height = `${childMenu.offsetHeight}px`;
        
                    menu.querySelectorAll(`.${this.openedClass}`).forEach(element => {
                        element.classList.remove(this.openedClass);
                    })

                    childMenu.classList.add(this.openedClass)
                })
                break;
            case 'prev':
                this.$menu.forEach(menu => {
                    menu.style.transition = `transform ${this.transitionSpeed}ms`;
                    menu.style.transform = `translateX(-${transform}%)`;
                    childMenu.style.display = 'none';
        
                    menu.querySelectorAll(`.${this.openedClass}`).forEach(element => {
                        element.classList.remove(this.openedClass);
                    })

                    if (this.depth > 0) {
                        childMenu.parentElement.parentElement.parentElement.classList.add(this.openedClass)
                        menu.style.height = `${childMenu.parentElement.parentElement.parentElement.offsetHeight}px`;
                    } else {
                        menu.style.height = `100%`;
                    }
                })
        }

        const buttonBack = document.querySelector(this.backButtonSelector);
        if (this.isOpen) {
            buttonBack.classList.add(this.showBtnClass);
        } else {
            buttonBack.classList.remove(this.showBtnClass);
        }
    }

    changeTitle(title) {
        const titleElement = document.querySelectorAll(this.titleMenuSelector)
        titleElement.forEach(element => {
            element.textContent = title
        })
    }

    clearMenu() {
        this.$menu.forEach(menu => {
            const openedMenu = menu.querySelector(`.${this.openedClass}`);
            const childMenus = menu.querySelectorAll(this.childSelector);

            if (childMenus.length) {
                childMenus.forEach(element => {
                    element.style.display = 'none';
                })
            }

            if (openedMenu) {
                openedMenu.classList.remove(this.openedClass);
            }

            menu.style.transform = '';
            menu.style.height = '';
        })

        this.isOpen = false
        this.depth = 0
        this.changeOpened(0);
        this.changeTitle(this.defaultTitle);

        const buttonBack = document.querySelector(this.backButtonSelector);
        buttonBack.classList.remove(this.showBtnClass);
    }
}