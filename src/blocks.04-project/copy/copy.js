class Copy {
  constructor(elem) {
    this.block = elem;
    this.block.Copy = this;
    this.copyBlock = this.block.querySelector('.copy__text');

    this.init();
  }

  init = () => {
    this.copy();

    this.block.classList.add('copy_inited');
  };
  copy = () => {
    this.copyBlock.addEventListener('click', () => {
      // const textToCopy = this.copyBlock.textContent.trim();

      let tempInput = document.createElement('input');
      tempInput.value = 'EQC_Br9_cFIywrKoAGR3C5EBnrMrWueU0zqQ-0OsldqoADyW';
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand('copy');

      document.body.removeChild(tempInput);
    });
  };
  static init() {
    return Array.from(document.querySelectorAll('.copy:not(.copy_inited)')).forEach((elem) => new Copy(elem));
  }
}

document.addEventListener('DOMContentLoaded', Copy.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Copy = Copy;

