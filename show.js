let $ = document

let btn = $.querySelector("button.نمایشی")
let div = $.querySelector("div.نمایشی")

btn.addEventListener("click", () => {
    console.log(div.style.display);
    
    if (div.style.display = "none") {
        div.style.display = "block"
    }else {
        div.style.display = "block"
    }
})
