export default function isLinkActive(id: string) {
  const element = document.getElementById(id);
  let isActive = false;

  if (
    element!.getBoundingClientRect().top +
      element!.getBoundingClientRect().height >
      window.innerHeight / 2 &&
    element!.getBoundingClientRect().top < window.innerHeight / 2
  ) {
    isActive = true;
  }
  return isActive;
}
