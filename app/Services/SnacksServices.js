import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";

class SnacksServices {
  addMoney() {
    ProxyState.money += .25
  }

  buySnack(name) {
    let snack = ProxyState.snack.find(s => s.name == name)
    if (snack.price > ProxyState.money) {
      return console.log('Cant buy snacks')
    } else {
      ProxyState.money -= snack.price
      console.log('enjoy your ' + snack.name)
    }







  }
}
export const snacksServices = new SnacksServices();