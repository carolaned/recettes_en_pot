export default class Snackbar {
  constructor(element) {
    this.element = element;
    this.scrollLimit = 0.1;
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;

    this.init();
    this.initDelay();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this));

    const close = this.element.querySelector('.js-close');
    close.addEventListener('click', this.onClose.bind(this));
  }

  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setSnackbarState();
  }

  setSnackbarState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if (this.scrollPosition > scrollHeight * this.scrollLimit) {
      this.html.classList.add('snackbar-is-hidden');
    } else {
      this.html.classList.remove('snackbar-is-hidden');
    }
  }

  initDelay() {
    const time = this.element.dataset.delay;
    setTimeout(this.AddSnackbar.bind(this), time);
  }

  AddSnackbar() {
    this.html.classList.remove('snackbar-is-hidden');
  }

  onClose() {
    this.html.classList.add('snackbar-is-hidden');
  }
}
