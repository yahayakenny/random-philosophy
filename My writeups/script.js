const submit = document.getElementById('submit');
const output = document.getElementById('output-text');

const showPoem = async() => {
   //Generate random number
    const random = Math.floor(Math.random() * 12 ) 

    const result = await fetch('poems.json');
    const response = await result.json()
    output.innerHTML = response.poems[`${random}`].poem
  
}

submit.addEventListener('click', showPoem);//Create event listener for the button