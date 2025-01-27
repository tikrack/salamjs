const input1 = parseInt(document.querySelector("input:nth-of-type(1)").value);
const input2 = parseInt(document.querySelector("input:nth-of-type(2)").value);

document.querySelector("button").addEventListener("click", () => {
    alert(input1 + input2);
});
