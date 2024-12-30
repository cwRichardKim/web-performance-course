const {
  containerWidth,
  registerNextClick,
 } = setup();

 const elements = Array.from(document.querySelectorAll('.element'));

 registerNextClick(function (timestamp) {
  const tops = elements.map((element) => element.offsetTop);
  elements.forEach((element, index) => {
    const nextPosition = +((Math.sin(tops[index] + timestamp/1000) + 1) / 2 * containerWidth);
    element.style.transform = `translateX(${nextPosition}px)`;
  });
 });
