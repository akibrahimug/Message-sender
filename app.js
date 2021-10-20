const input = document.getElementById('text');
const form = document.querySelector('form');
const parah = document.querySelector('p')

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value;
    if(text === ''){
        return false
    }else
    parah.textContent = text;
    input.value = ''
})