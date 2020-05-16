import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { source, name, attack, defense, health } = fighter;
  const attributes = { src: source};
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body', attributes});
  const nameElement = createElement({ tagName: 'h3', className: 'fighter-name' });
  const attackElement = createElement({tagName: 'h4', className:'fighter-attack'});
  const defenseElement = createElement({tagName: 'h4', className:'fighter-defense'});
  const healthElement = createElement({tagName: 'h4', className:'fighter-helth'});
  const imageElement = createElement({tagName: 'img', className:'fighter-image', attributes});
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = 'Name - ' + name;
  attackElement.innerText = 'Attack - ' + attack;
  defenseElement.innerText = 'Defense - ' +  defense;
  healthElement.innerText = 'Health - ' + health;

  fighterDetails.append(nameElement, attackElement, defenseElement, healthElement, imageElement);

  return fighterDetails;
}
