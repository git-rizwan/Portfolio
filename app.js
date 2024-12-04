// skill progress level
const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelectorAll(".show-on-scroll");

let start;
document.onscroll = function () {
  if (isElementInViewport(progressBarContainer)) {
    if (!start) {
      window.requestAnimationFrame(loop);
    }
  } else {
    start = null;
  }
};

const animationTime = 1000;
function loop(timestamp) {
  if (!start) {
    start = timestamp;
  }
  const elapsed = timestamp - start;
  const progress = elapsed / animationTime;
  progressBar.forEach((bar) => {
    const progressComplete = bar.getAttribute("data-complete");
    const width = progress < 1 ? Math.ceil(progress * 100) : progressComplete;
    //  it means: if (progress < 1) {Math.ceil(process * 100)} else {progressComplete}};
    if (width <= progressComplete) {
      bar.style.width = width + "%";
      bar.innerHTML = width + "%";
    }
  });
  if (progress <= 1) {
    window.requestAnimationFrame(loop);
  }
}

function isElementInViewport(element) {
  var rectangle = element.getBoundingClientRec();
  var height = window.innerHeight || document.documentElement.clientHeight;
  var top = rectangle.top;
  var bottom = rectangle.bottom;

  return (
    (top <= 0 && bottom >= 0) ||
    (bottom >= height && top <= height) ||
    (top >= 0 && bottom <= height)
  );
}
