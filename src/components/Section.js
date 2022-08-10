export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  renderFilteredItems(items) {
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
