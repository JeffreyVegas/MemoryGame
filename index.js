const charactersOfview = document.getElementById("characters");
const btnReset = document.getElementById("btnReset");
const contentSO = document.getElementById("selectedOptions-content");
const messageResult = document.getElementById("message");

let Options = [];
let characters;
let seletedOptions = [];

window.addEventListener("load", function () {
  changeCharacters();

  for (let i = 0; i < 4; i++) {
    // input - inputText
    Options.push({
      input: document.getElementById(`op${i + 1}`),
      TextOption: document.getElementById(`op${i + 1}Text`),
    });
  }

  console.log(characters);
  const messupCharacters = messup(Array.from(characters));
  changeTextOptions(messupCharacters);
  catchChecked(Options);
});

function resetGame() {
  changeCharacters();
  console.log(characters);
  const messupCharacters = messup(Array.from(characters));
  changeTextOptions(messupCharacters);
  seletedOptions = [];
  contentSO.innerHTML = "";
}

// arreglo cuando presiona.

function changeTextOptions(characters) {
  Options.forEach((item, index) => {
    item.TextOption.textContent = characters[index];
    item.input.checked = false;
  });
}

function changeContentSO(arrayOptions) {
  let blockHtml = ``;
  arrayOptions.forEach((item, index) => {
    blockHtml += `<p> ${index}.- ${item.value} </p>`;
  });
  contentSO.innerHTML = blockHtml;
}

function catchChecked(options) {
  options.forEach((opt, index) => {
    opt.input.addEventListener("change", (e) => {
      if (e.target.checked) {
        seletedOptions.push({ value: opt.TextOption.textContent, id: index });
      } else {
        seletedOptions = seletedOptions.filter((item) => item.id !== index);
      }
      changeContentSO(seletedOptions);
      checkResult();
    });
  });
}

function checkResult() {
  let res = "";
  seletedOptions.forEach((item) => {
    res += item.value;
  });
  if (characters === res) {
    messageResult.textContent = "DONE";
  } else {
    messageResult.textContent = "Try again";
  }
}

function messup(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function changeCharacters() {
  //almacer para comprobar
  characters = randomCharacter();
  // cambiar en la vista
  charactersOfview.textContent = characters;
  //poner en modo oculto el p
  setTimeout(() => {
    charactersOfview.textContent = "----";
  }, 2000);
}

btnReset.addEventListener("click", resetGame);

function randomCharacter() {
  const arr = ['"', "#", "$", "%", "(", ")", "/", "&"];
  let result = "";
  for (let i = 0; i < 4; i++) {
    const random = parseInt(Math.random() * arr.length);
    result += arr[random];
  }
  return result;
}

function ordenCorrecto(input) {
  if (input === "$%^&") {
    console.log("exito");
  } else {
    console.log("Incorrecto");
  }
}
