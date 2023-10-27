import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';

/** Classe principale du projet */
class Main {
  /**
   * Méthode constructeur
   */
  constructor() {
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    document.documentElement.classList.add('has-js');

    Icons.load();
    new ComponentFactory();
  }
}

new Main();
