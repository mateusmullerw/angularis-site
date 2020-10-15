export default function useScrollTo(id: string) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({ left: 0, top: section!.offsetTop, behavior: "smooth" });
  }
  return;
}
