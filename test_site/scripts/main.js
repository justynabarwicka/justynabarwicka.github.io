var myImage = document.querySelector('img'); // przechowuje odwołanie do obrazu w zmiennej myImage 

myImage.onclick = function() { // ustawiam zdarzenie onclick zmienne myVariable na funkcje bez nazwy ->
    var mySrc = myImage.getAttribute('src'); // pobieram wartość atrybutu src obrazu img  
    if(mySrc === 'img/cat.jpg') {           // gdy zostanie kliknięty obrazek, if -> sprawdzam czy wartość src jest równa ścieżce do                                                     orginalnego obrazu:
      myImage.setAttribute ('src','img/cat2.jpg'); // jeśli tak zmiennam ścieżkie do img2
    } else {
      myImage.setAttribute ('src','img/cat.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
  localStorage.setItem('name', myName); // localStrage pozwala nam na przechowywanie danych o nazwie name w przeglądarce, a później je odzyskiwanie, funkcja setItem() ustawia nam wartość na naszą zmienną myName
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) { // jeśli nie istnieją dane dotyczące nazwy uruchomiana jest funkcja setUserName
  setUserName();
} else {
  var storedName = localStorage.getItem('name'); // jeśli istnieje z poprzedniej wizyty pobieramy są za pomocą getIthem()
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}