let $ = document

let btn = $.querySelector("button.نمایشی")
let div = $.querySelector("div.نمایشی")

window.addEventListener("load", () => {
    div.style.display = "none"
    
    btn.addEventListener("click", () => {
        if (div.style.display === "none") {
            div.style.display = "block"
        }else {
            div.style.display = "none"
        }
    })
})
