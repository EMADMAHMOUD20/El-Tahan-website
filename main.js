var sentenceElement = document.getElementById("sentence");
var sentences = [
  "للنقل الدولي",
  "للتغليف",
    "لنقل الموبيليات"
  
];
var currentIndex = 0;

function displaySentenceLetterByLetter() {
  var sentence = sentences[currentIndex];
  var index = 0;

  var timer = setInterval(function() {
    sentenceElement.textContent += sentence[index];
    index++;
    if (index >= sentence.length) {
      clearInterval(timer);
      setTimeout(removeSentenceLetterByLetter, 1000); // Delay before removing letters
    }
  }, 100); // Delay between each letter display
}

function removeSentenceLetterByLetter() {
  var sentence = sentences[currentIndex];
  var index = sentence.length - 1;

  var timer = setInterval(function() {
    sentenceElement.textContent = sentenceElement.textContent.slice(0, -1);
    index--;
    if (index < 0) {
      clearInterval(timer);
      currentIndex = (currentIndex + 1) % sentences.length; // Move to the next sentence
      setTimeout(displaySentenceLetterByLetter, 1000); // Delay before displaying the next sentence
    }
  }, 100); // Delay between each letter removal
}

displaySentenceLetterByLetter(); // Start the process with the first sentence


