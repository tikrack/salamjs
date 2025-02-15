const $ = document
const elm_menu_btn = $.querySelector("button.منو")
const elm_menu = $.querySelector("div.منو")

elm_menu_btn.addEventListener("click", () => {
    console.log(elm_menu.style.right);
    
    if (elm_menu.style.right === "0px") {
        console.log("close")
        elm_menu.style.right === "-100%"
    }else {
        console.log("open");
        elm_menu.style.right = "0"
    }
})