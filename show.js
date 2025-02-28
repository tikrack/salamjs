let $ = document

let btn = $.querySelector("button.نمایشی")
let div = $.querySelector("div.نمایشی")

btn.addEventListener("click", () => {
    console.log(div.style.display);
    
    if (div.style.display == "block" || div.style.display == "") {
        div.style.display === "none"
    }else {
        div.style.display === "block"
    }
})
