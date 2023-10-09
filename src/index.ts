// declartions
const url = 'https://chatgpt-api7.p.rapidapi.com/ask';
const btnGenerate = document.querySelector('.generateBtn') as HTMLButtonElement;
const inputEl = document.querySelector('.inputEl') as HTMLInputElement;
const responseEl = document.querySelector(
  '.responseEl'
) as HTMLParagraphElement;

// functions
async function generateAnswer(msg: string) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'YOUR_API_KEY',
      'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com',
    },
    body: JSON.stringify({
      query: msg,
    }),
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  if (data.response) {
    responseEl.textContent = data.response;
  } else {
    responseEl.textContent = 'Generated content';
  }
}

// events

btnGenerate.addEventListener('click', () => {
  const inputValue = inputEl.value.trim();

  if (inputValue.length > 0) {
    responseEl.textContent = 'Generating...';
    generateAnswer(inputValue);
  } else {
    alert('You need to enter a question.');
  }
});
