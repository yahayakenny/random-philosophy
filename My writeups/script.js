const submit = document.getElementById('submit');
const output = document.getElementById('output-text');

submit.addEventListener('click', showPoem);//Create event listener for the button

async function showPoem() {
   
    const random = Math.floor(Math.random() * 12 )//Generate random number 
    return output.innerHTML = await fetch('poems.json')
    .then((res) => res.json())
    .then((data) => data.poems[`${random}`].poem);  
}
