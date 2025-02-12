let elm_allButton = document.querySelectorAll("button.هشدار")

elm_allButton.forEach((elm) => {
    elm.addEventListener("click", (e) => {
        let alt = elm.getAttribute("alert")
        alert(alt)
    })
})