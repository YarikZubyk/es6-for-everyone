
import { createElement } from './helpers/domHelper';
import { showModal } from './modals/modal';
import { fightersDetails } from './helpers/mockData';
import { showWinnerModal } from './modals/winner';

let hp1 = 0;
let hp2 = 0;
let healthElement2 = null;
let healthElement = null;

export async function fight(firstFighter, secondFighter) {
  // return winner

  showFighterFightModal(firstFighter, secondFighter);
  while (hp2 > 0 && hp1 > 0) {
    hp2 = hp2 - getDamage(firstFighter, secondFighter);
    await TimeOutPromise(100);
    console.log(hp2);
    healthElement2.innerText = 'Total Health - ' + hp2;

    hp1 = hp1 - getDamage(secondFighter, firstFighter)
    await TimeOutPromise(100);
    console.log(hp1);
    healthElement.innerText = 'Total Health - ' + hp1;
  }
  await TimeOutPromise(2000);

  if (hp2 > hp1) {
    return secondFighter;
  } else {
    return firstFighter;
  }
}

function TimeOutPromise(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  })
}


export function getDamage(attacker, enemy) {
  // damage = hit - block
  // return damage
  let damage = getHitPower(attacker) - getBlockPower(enemy);
  if (damage < 0) {
    damage = 0;
  }
  console.log('damage = ', damage);
  return damage;
}

export function getHitPower(fighter) {
  // return hit power
  const criticalHitChance = getRandomInt(2);
  const power = fighter.attack * criticalHitChance;
  console.log('criticalHitChance = ', criticalHitChance);
  console.log('power = ', power);
  return power;
}

export function getBlockPower(fighter) {

  const dodgeChance = getRandomInt(2);
  const block = fighter.defense * dodgeChance;
  console.log('block = ', block);
  return block;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export function showFighterFightModal(firstFighter, secondFighter) {
  const title = 'Fighter Arena';
  const bodyElement = createFighterForFight(firstFighter, secondFighter);
  showModal({ title, bodyElement });
}

function createFighterForFight(firstFighter, secondFighter) {

  //first fighter
  let name1 = firstFighter.name;
  let health1 = firstFighter.health;
  let attack1 = firstFighter.attack;
  let source1 = firstFighter.source;
  hp1 = health1;

  let attributes = { align: "left" };
  let firstfighterDetails = createElement({ tagName: 'td', className: 'modal-first-body', attributes });
  let nameElement = createElement({ tagName: 'p', className: 'first-fighter-name' });
  healthElement = createElement({ tagName: 'p', className: 'first-fighter-health' });
  let attackElement = createElement({ tagName: 'p', className: 'first-fighter-attack' });
  attributes = { src: source1 };
  let imageElement = createElement({ tagName: 'img', className: 'first-fighter-image', attributes });

  // show fighter name, attack, defense, health, image

  nameElement.innerText = 'Name - ' + name1;
  healthElement.innerText = 'Total Health - ' + health1;
  attackElement.innerText = 'Attack - ' + attack1;

  firstfighterDetails.append(nameElement, healthElement, attackElement, imageElement);

  //second fighter

  let name2 = secondFighter.name;
  let health2 = secondFighter.health;
  let attack2 = secondFighter.attack;
  let source2 = secondFighter.source;
  hp2 = health2;

  attributes = { align: "right" }
  let secondfighterDetails = createElement({ tagName: 'td', className: 'modal-second-body', attributes });
  let nameElement2 = createElement({ tagName: 'p', className: 'second-fighter-name' });
  healthElement2 = createElement({ tagName: 'p', className: 'second-fighter-health' });
  let attackElement2 = createElement({ tagName: 'p', className: 'second-fighter-attack' });
  attributes = { src: source2 };
  let imageElement2 = createElement({ tagName: 'img', className: 'second-fighter-image', attributes });

  nameElement2.innerText = 'Name - ' + name2;
  healthElement2.innerText = 'Total health - ' + health2;
  attackElement2.innerText = 'Attack - ' + attack2;


  secondfighterDetails.append(nameElement2, healthElement2, attackElement2, imageElement2);

  attributes = { width: "100%", cellspacing: "0", cellpadding: "5" };
  const arena = createElement({ tagName: 'table', className: 'modal-body', attributes });
  const cells = createElement({ tagName: 'tr', className: 'modal-body', attributes });
  cells.append(firstfighterDetails, secondfighterDetails);
  arena.append(cells);
  return arena;
}