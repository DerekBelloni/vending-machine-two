import { ProxyState } from "../AppState.js"
import { snacksServices } from "../Services/SnacksServices.js"



function _drawMoney() {
  const money = ProxyState.money
  let template =
    `
  <p>Money: ${money} </p>
  `
  document.getElementById('money').innerHTML = template

}

function _drawSnacks() {
  const snacks = ProxyState.snack
  let template = ''
  snacks.forEach(s => template += s.Template)
  document.getElementById('snack-button').innerHTML = template
}


export class SnacksController {

  constructor() {
    ProxyState.on('money', _drawMoney)
    _drawSnacks()
  }

  addMoney() {
    snacksServices.addMoney()
    // console.log('[Snacks Controller]:', ProxyState.money)
  }

  buySnack(name) {
    snacksServices.buySnack(name)

  }

}