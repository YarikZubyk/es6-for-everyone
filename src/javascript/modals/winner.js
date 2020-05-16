import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showWinnerModal(fighter) {
  const title = 'Winner info';
  fighter.then(fighter => {const bodyElement = winnerFighterDetails(fighter);
    showModal({ title, bodyElement });
  });
}

function winnerFighterDetails(fighter) {
  const { source, name} = fighter;
  
  let attributes = { align: "center" };
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-winner', attributes});
  const nameElement = createElement({ tagName: 'h3', className: 'fighter-name' });
  attributes = { src: source};
  const imageElement = createElement({tagName: 'img', className:'fighter-image', attributes});
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = 'Name - ' + name;

  fighterDetails.append(nameElement, imageElement);

  return fighterDetails;
}