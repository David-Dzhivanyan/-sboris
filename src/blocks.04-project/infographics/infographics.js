class Infographics {
  constructor(elem) {
    this.block = elem;
    this.block.Infographics = this;

    this.init();
  }

  init = () => {

    this.block.classList.add('infographics_inited');
  };

  static init() {
    return Array.from(document.querySelectorAll('.infographics:not(.infographics_inited)')).forEach((elem) => new Infographics(elem));
  }
}

document.addEventListener('DOMContentLoaded', Infographics.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Infographics = Infographics;

