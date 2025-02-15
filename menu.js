const $ = document
const elm_menu_btn = $.querySelector("button.منو")
const elm_menu = $.querySelector("div.منو")
const elm_close_menu = $.querySelector("button.بستن")

elm_menu_btn.addEventListener("click", () => {
    console.log(elm_menu.style.right);
    
    if (elm_menu.style.right === "0") {
        elm_menu.style.right === "-100%"
    }else {
        elm_menu.style.right = "0"
    }
})