document.addEventListener("DOMContentLoaded", (ev) => {

    let tab = function () {
        const tabRow = document.querySelectorAll('.answers__row');
        const tabContent = document.querySelectorAll('.answers__text-block');
        const tabLine = document.querySelectorAll(".answers__line");
        let tabName;

        tabRow.forEach(item => {
            item.addEventListener('click', selectTabRow);
        });

        function selectTabRow() {
            tabRow.forEach(item => {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
            hideLine(tabName);
            clearRowStyle(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                 if (item.classList.contains(tabName)) {
                     item.classList.toggle('is-active') ;
                }
                else {
                    item.classList.remove('is-active');
                }
            })
        }
        function clearRowStyle (tabName) {
            tabRow.forEach(item => {
                item.classList.contains(tabName) ? item.classList.toggle("clear") : item.classList.remove("clear");
            })
        }
        function hideLine (tabName) {
            tabLine.forEach(item => {
                item.classList.contains(tabName) ? item.classList.toggle("hidden") : item.classList.remove("hidden");
            })
        }

    };

    tab();


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

    const modalPoliticEl = document.querySelector(".modal_politic");
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
            if (ev.target && ev.target.classList.contains("overlay")) {
                document.body.style.overflowY = "auto";
                modalPoliticEl.classList.add("hidden");
            }
        })
    }
    closeForm();

    const showMobileMenu = () => {
        document.addEventListener("click", (ev) => {
            const menuEl = document.querySelector(".menu");
            const burgerLineEl = document.querySelectorAll(".burger__line");

            if (ev.target && ev.target.classList.contains("burger") || ev.target && ev.target.classList.contains("burger__line") || ev.target && ev.target.classList.contains("menu__link")) {
                menuEl.classList.toggle("open");
                burgerLineEl.forEach(item => {
                    item.classList.toggle("clear");
                });

            }
        })
    }
    showMobileMenu();

    const disabledCheckBox = () => {
        document.addEventListener("click", (ev) => {
            if ( ev.target && ev.target.classList.contains("menu__link")) {
                document.getElementById("burger__checkbox").checked = false;
            }
        })

    }
    disabledCheckBox();

});