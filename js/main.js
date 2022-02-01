document.addEventListener("DOMContentLoaded", (ev) => {
    const modalPoliticEl = document.querySelector(".modal_politic");
    const burgerButtonEl = document.querySelector(".burger");
    const menuEl = document.querySelector(".menu").innerHTML;

    let burgerMenuMobileEl = `<div class="burger-menu">
                        <div class="overlay overlay_burger-menu">
                            <ul class="menu-mobile">
                            ${menuEl}
                            </ul>
                        </div>
                    </div>`;

    const showTabsText = () => {
        const itemAnswerEl = document.querySelectorAll(".answers__item");
        itemAnswerEl.forEach(element => {
            element.addEventListener("click", (ev) => {
                if(ev.target && ev.target.classList.contains("answers__title") || ev.target && ev.target.classList.contains("answers__icon")) {
                    const itemsArr = element.children;
                    for (let item of itemsArr) {
                       if (item.classList.contains("answers__text-block")) {
                           item.classList.toggle("hidden");
                       }
                    }
                    for (let item of itemsArr) {
                        if(item.classList.contains("answers__row")) {
                           item.classList.toggle("clear");
                            const rowEl = item.children;
                            for (let el of rowEl) {
                                if (el.classList.contains("answers__icon")) {
                                    const icon = el.lastElementChild;
                                    icon.classList.toggle("hidden");
                                }
                            }
                        }
                    }
                }
            })
        })
    }
    showTabsText();

    const checkInputForm = () => {
        document.addEventListener("click", (ev) => {
            if (ev.target && ev.target.classList.contains("form") || ev.target && ev.target.classList.contains("form__input")) {
                const orderForm = document.querySelectorAll(".form");
                orderForm.forEach(element => {
                    element.addEventListener("keyup", (v) => {
                        const name = element.querySelector("#name").value;
                        const phone = element.querySelector("#phone").value;
                        const btn = element.querySelector(".button_form");
                        console.log(phone.length);
                        if (name.length >= 3 && phone.length >= 18) {

                            btn.classList.add("gradient");
                            btn.classList.remove("button__disabled");
                        }
                        else if (name.length <= 2 || phone.length <= 17){
                            btn.classList.remove("gradient");
                            btn.classList.add("button__disabled");
                        }
                    })
                })
            }
        })

    }
    checkInputForm();

    const addMaskForPhone = () => {
        document.addEventListener("keypress", (ev) => {
            if (ev.target && ev.target.classList.contains("form__input_phone")) {
                let phone = ev.target;
                let maskOptions = {
                    mask: '+{7} (000) 000-00-00',
                    // lazy: false
                };
                let mask = IMask(phone, maskOptions);
            }
        });

    }
    addMaskForPhone();

    const showPolitic = () => {
        const politicBtnEl = document.querySelector(".footer__politic");
        politicBtnEl.addEventListener("click", (ev) => {
            ev.preventDefault();
            if (modalPoliticEl.classList.contains("hidden")) {
                modalPoliticEl.classList.remove("hidden");
                document.body.style.overflowY = "hidden";
            }
        })
    }
    showPolitic();

    const closeForm = () => {
        document.addEventListener("click", (ev) => {
            if (ev.target && ev.target.classList.contains("overlay") || ev.target && ev.target.classList.contains("menu__link")) {
                document.body.style.overflowY = "auto";
                modalPoliticEl.classList.add("hidden");
                const mobileMenuEl = document.querySelector(".burger-menu");
                mobileMenuEl.parentNode.removeChild(mobileMenuEl);
            }
        })
    }
    closeForm();

    const showMobileMenu = () => {
        burgerButtonEl.addEventListener("click", (ev) => {
            const headerEl = document.querySelector(".header__left");
            headerEl.insertAdjacentHTML("beforeend", burgerMenuMobileEl);
            document.body.style.overflowY = "hidden";
        })
    }
    showMobileMenu();
});