const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
     input.addEventListener('input',valueChanged)
})
 
function valueChanged(e) {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    console.log(e.target.value);
}