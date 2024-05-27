export default function moveText(node) {
  let currentIndex = 0;
  let distance = 0;
  let IMAGE_HEIGHT = node.clientHeight / 2;

  const handleMouseEnter = () => {
    if (currentIndex == 0) {
      distance -= IMAGE_HEIGHT;
      node.style.transform = `translateY(${distance}px)`;
      currentIndex += 1;
    }
  };

  const handleMouseLeave = () => {
    if (currentIndex == 1) {
      distance += IMAGE_HEIGHT;
      node.style.transform = `translateY(${distance}px)`;
      currentIndex -= 1;
    }
  };

  node.addEventListener("mouseenter", handleMouseEnter);
  node.addEventListener("mouseleave", handleMouseLeave);

  return {
    destory() {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    },
  };
}
