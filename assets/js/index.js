// Grab all article titles
let titles = document.querySelectorAll('.article-title');

function emojify(element, emoji) {
  // Change the text an emoji
  element.innerHTML = emoji;
}

let first_title = titles[0];

emojify(first_title, '💩💩💩');

// challenge: change the last title
let last_title = titles[9];

emojify(last_title, '🤗🤗🤗');

// get last paragraph
let all_p = document.querySelectorAll('.article p');

emojify(all_p[9], '📁');
