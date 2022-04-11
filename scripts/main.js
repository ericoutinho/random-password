const button = document.getElementById("btn-generate");

button.addEventListener("click", (event) => {
    const strong = parseInt(document.getElementById("sel-strong").value);
    passwordClear();
    document.querySelectorAll(".inputs-item input").forEach((element, index)=> {
        element.value = getPassword(strong);
    })
})

document.querySelectorAll(".inputs-item").forEach((element, index)=> {
    element.addEventListener("click", (event) => {
        let value = element.querySelector("input").value;
        if (value != '') {
            navigator.clipboard.writeText(value);
            element.classList.add("copied")
        }
    })
})

const randomNumberInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPassword = (strong) => {
    const chars = "qwertyUIOPasdfghJKLÇzxcvbNM12345677890.@$%#_-!&";
    let pass = '';
    for (let x = 0; x < strong; x++) {
        let i = randomNumberInt(0, chars.length - 1);
        pass = pass + chars[i];
    }
    return pass;
}

const passwordClear = () => {
    document.querySelectorAll(".inputs-item").forEach((element, index)=>{
        element.classList.remove("copied")
    })
}
