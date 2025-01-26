const span = document.querySelector("span")
let count = parseInt(localStorage?.getItem("count")) ?? 0
    
const make = () => {
    span.innerHTML = count
    localStorage.setItem("count", count)
}

make()

document.querySelector("button").addEventListener("click", () => {
    count = count + 1;
    make()
})