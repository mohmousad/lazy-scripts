/*
  Remove videos that are shorter than 1 hour from the channel's videos list.
*/

Array.from(document.querySelectorAll("span.style-scope.ytd-thumbnail-overlay-time-status-renderer")).forEach((i) => {
  if (i?.innerText && !i?.ariaLabel?.includes("hour")) {
    i.closest("ytd-rich-item-renderer").remove();
  }
});
