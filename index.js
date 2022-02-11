// function value

function dis(val) {
    document.getElementById("result").value+=val
}

// function that returns result

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById("result").value = y
}

// clear display
function clr() {
    document.getElementById('result').value = ""
}

// change dark/light mode

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark')
})