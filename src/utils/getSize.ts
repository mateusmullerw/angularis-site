export default function getSize(id: string) {
  const element = document.getElementById(id);
  let size = {
    width: 0,
    height: 0,
  };
  if (element) {
    size = {
      width: element!.getBoundingClientRect().width,
      height: element!.getBoundingClientRect().height,
    };
  }
  return size;
}
