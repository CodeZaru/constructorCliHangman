//angman word bank

var wordBank = ["programming", "marathon", "yogurt", "javascript", "international", "soccer", "backpack", "pentagon", "unilateral", "peace" ];

var randomWord = Math.floor(Math.random() * wordBank.length);

var hangWord = wordBank[randomWord];

exports.hangWord = hangWord;