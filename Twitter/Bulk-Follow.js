/*
  Bulk follow to twitter accounts of following or follower list of someone
    1. Go to https://twitter.com/<twitter handle>/<following or followers>
    2. Scroll to the end of the page (to load all the accounts in the page)
*/

Array.from(document.querySelectorAll("span"))
  .filter((btn) => btn.innerText == "Follow")
  .forEach((btn) => btn.click());
