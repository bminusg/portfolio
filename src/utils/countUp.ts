const animateCountUp = (el: Element): void => {
  const animationDuration = 600; // How long you want the animation to take, in ms
  const frameDuration = 1000 / 60; // Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
  const totalFrames = Math.round(animationDuration / frameDuration); // Use that to calculate how many frames we need to complete the animation
  const countTo = parseInt(el.innerHTML, 10); // Start the animation running 60 times per second
  const easeOutQuad = (t) => t * (2 - t); // An ease-out function that slows the count as it progresses

  let frame = 0;

  const counter = setInterval(() => {
    frame++;
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // progress on a curve
    const progress = easeOutQuad(frame / totalFrames);
    // Use the progress value to calculate the current count
    const currentCount = Math.round(countTo * progress);

    // If the current count has changed, update the element
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount.toString();
    }

    // If we’ve reached our last frame, stop the animation
    if (frame === totalFrames) clearInterval(counter);
  }, frameDuration);
};

export default (countUpEls: NodeListOf<Element>): void => {
  countUpEls.forEach((el) => {
    animateCountUp(el);
  });
};
