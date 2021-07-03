const inputs = document.querySelectorAll('input');
const button = document.querySelector('.fileUpload-btn')
const fileInput = document.getElementById('fileUpload')
const image = document.getElementById('image-container')
inputs.forEach(input => {
     input.addEventListener('input',valueChanged)
})
 
function valueChanged(e) {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
}
button.addEventListener('click', () => {
    fileInput.click();
})
fileInput.addEventListener('change', (e) => {
    const [file] = fileInput.files;
    if (file) {
        image.src = URL.createObjectURL(file);
    }
})