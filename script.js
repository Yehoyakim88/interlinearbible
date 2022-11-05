async function fetchBible() {
  let bibleFile;
  let bibleFileAsJson;
  let verse;
  let verseArray;
  let verseArrayReverse;
  let verseArrayReverseRejoined;

  let transliteration = 'wə•ḡam ʾeṯ-šab•bə•ṯōw•ṯay nā•ṯat•tiy lā•hem lih•yōwṯ lə•ʾōwṯ bēy•niy uw•ḇēy•nēy•hem lā•ḏa•ʿaṯ kiy ʾă•niy yəh•wāh mə•qad•də•šām';
  //   transliteration.replace('\xe2\x80\xa2', 'bbbbbbbbb');
  
  for (let index = 0; index < 100; index++) {
    transliteration = transliteration.replace("•", "");
  }
  
  transliteration = transliteration.replace("-", " ");

  console.log(bibleFileAsJson);
  console.log(verse);

  bibleFile = await fetch("./wlc.json");
  bibleFileAsJson = await bibleFile.json();
  verse = bibleFileAsJson["books"][13]["chapters"][19]["verses"][11]["text"];

  verse = replaceSpecialChars(verse);
  verseArray = verseAsSingleWordsArray(verse);
  verseArrayReverse = verseArray.reverse();
  verseArrayReverseRejoined = verseArrayReverse.join(" ");

  document.getElementById("text-displayer").innerHTML += /*html*/ `
      <h1>Verse as Array:</h1>
      <br><span class="verse-Ezra-SIL">${verseArrayReverseRejoined}</span>
      <br><span class="transliterated">${transliteration}</span>
      `;
}

async function display_wlc_SBL_Hebrew() {
  let bibleFile = await fetch("./wlc.json");
  let bibleFileAsJson = await bibleFile.json();
  let verse =
    bibleFileAsJson["books"][13]["chapters"][19]["verses"][11]["text"];
  let singleWord =
    bibleFileAsJson["books"][13]["chapters"][19]["verses"][11]["text"][10];

  let verseModi = verse.replace("\u05be", " ");
  document.getElementById("text-displayer").innerHTML += /*html*/ `
    <br><span class="verse-SBL-Hebrew">${verse}</span>
    `;

  document.getElementById("text-displayer").innerHTML += /*html*/ `
    <br><span class="verse-SBL-Hebrew">${verseModi}</span>
    `;
}

function replaceSpecialChars(myString) {
  return myString.replace("\u05be", " ");
}

function verseAsSingleWordsArray(givenVerse) {
  return givenVerse.split(" ");
}

function testFunction() {
  document.getElementById("text-displayer").innerHTML += /*html*/ `
      <span class="bibleText">${verse}</span>
      <br><span class="bibleText">${singleWord}</span>
      <br><span class="bibleText">\u05d0\u05b6\u05ea\u05be\u05e9</span>
      <br><span class="bibleText">\u05be</span>
      `;
}
