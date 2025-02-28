const $ = document
const elm_menu_btn = $.querySelector("button.منو.باز")
const elm_menu_btn_close = $.querySelector("button.منو.بسته")
const elm_menu = $.querySelector("div.منو")

elm_menu_btn.addEventListener("click", () => {    
    if (elm_menu.style.right === "0px") {
        elm_menu.style.right = "-100%"
    }else {
        elm_menu.style.right = "0"
    }
})

elm_menu_btn_close.addEventListener("click", () => {    
        elm_menu.style.right = "-100%"
})