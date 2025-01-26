const span = document.querySelector("span")
let count = localStorage?.getItem("count") ?? 0
    
const make = () => {
    span.innerText = count
    localStorage.setItem("count", count)
}

make()

document.querySelector("button").addEventListener("click", () => {
    count = count + 1;
    make()
})