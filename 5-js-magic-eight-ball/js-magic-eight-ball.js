Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@GillianTrethewey 
GillianTrethewey
/
dev30-magic-eight-ball
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
dev30-magic-eight-ball/main.js /
@GillianTrethewey
GillianTrethewey Create main.js
Latest commit 3dfd572 2 days ago
 History
 1 contributor
29 lines (24 sloc)  825 Bytes
   
let userName = 'Gillian';
userName ? console.log(`Hello ${userName}`) : console.log(`Hello!`);

const userQuestion = "Should we move to Victoria?";

console.log(`You asked, "${userQuestion}", ${userName}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
 eightball = 'It is certain';
} else if (randomNumber === 1) {
  eightball = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightball = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightball = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightball = 'Do not count on it';
} else if (randomNumber === 5) {
  eightball = 'My sources say no';
} else if (randomNumber === 6) {
  eightball = 'Outlook not so good';
} else  {
  eightball = 'Signs point to yes';
}
console.log(eightball);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete