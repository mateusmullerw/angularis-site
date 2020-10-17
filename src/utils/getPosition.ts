export default function getPosition(id: string) {
  const element = document.getElementById(id);
  let size = {
    bottom: 0,
    left: 0,
  };
  if (element) {
    size = {
      bottom: element!.getBoundingClientRect().bottom,
      left: element!.getBoundingClientRect().left,
    };
  }
  return size;
}
