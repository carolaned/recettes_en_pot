export default class Cursor {
  constructor(element) {
    this.element = element;
    this.init();
    document.documentElement.classList.add('custom-cursor');
  }
  init() {
    this.initCursorActions();
    this.initHoverAnimation();
  }

  initCursorActions() {
    document.addEventListener('mousemove', this.followCursor.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  initHoverAnimation() {
    const links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.addEventListener('mouseenter', this.onLinkHover.bind(this));
      link.addEventListener('mouseleave', this.onLinkOut.bind(this));
    }
  }

  followCursor(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    this.element.style.left = `${mouseX}px`;
    this.element.style.top = `${mouseY}px`;
  }

  onLinkHover() {
    this.element.classList.add('hover-cursor');
  }
  onLinkOut() {
    this.element.classList.remove('hover-cursor');
  }

  onMouseDown() {
    this.element.classList.add('down');
  }
  onMouseUp() {
    this.element.classList.remove('down');
  }
}
