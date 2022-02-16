export class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get Template() {
    return `<div class="col-4 d-flex justify-content-between bg-primary">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">'${this.name}'</h5>
      <h5>${this.price}
      <a href="#" id="snack-bttn" class="btn btn-primary" onclick="app.snacksController.buySnack('${this.name}')">Buy </a>
    </div>
  </div>
  </div>`
  }
}