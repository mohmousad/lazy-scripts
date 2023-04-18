/*
Bulk subscribe to youtube channels of someone
  1. Go to https://www.youtube.com/<chanel name>/channels
  2. Scroll to the end of the page (to load all the channels of the )
*/

Array.from(document.querySelectorAll("[aria-label]"))
  .filter((btn) => btn.ariaLabel.includes("Subscribe"))
  .forEach((btn) => btn.click());
