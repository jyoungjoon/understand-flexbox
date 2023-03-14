
// script for the collapsible buttons
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// // assigning values to the buttons
// var boxgrp = document.getElementById('boxgrp')

// const box = {
//   addBox: document.getElementById('addBox'),
//   deleteBox: document.getElementById('deleteBox')
// }

// // This feature adds box-items with the click of a button

// box.addBox.addEventListener('click', createBox);

//   function createBox() {
//     const newBox = document.createElement('div');
//     newBox.classList.add('box-item');
//     const boxCount = document.getElementsByClassName('box-item').length;
//     newBox.innerText = (boxCount + 1);
//     const boxgrp = document.getElementById('boxgrp');
//     boxgrp.appendChild(newBox);
//     const randomColor = Math.floor(Math.random()*16777215).toString(16)
//     newBox.style.backgroundColor = '#' + randomColor;
//     const boxWidth = document.getElementById('boxWidth').value;
//     newBox.style.width = boxWidth + 'px';
//     const boxHeight = document.getElementById('boxHeight').value;
//     newBox.style.height = boxHeight + 'px';
//   }

// // This feature removes box-items with the click of a button
//   box.deleteBox.addEventListener('click', deleteBox);

//   function deleteBox() {
//     const boxgrp = document.getElementById('boxgrp');
//     const boxCount = document.getElementsByClassName('box-item').length;
//     if (boxCount > 0) {
//       boxgrp.removeChild(boxgrp.lastChild);
//     }
//   }

const box = {
  addBox: document.getElementById('addBox'),
  deleteBox: document.getElementById('deleteBox')
};

const boxgrp = document.getElementById('boxgrp');
const boxWidthInput = document.getElementById('boxWidth');
const boxHeightInput = document.getElementById('boxHeight');

box.addBox.addEventListener('click', createBox);
box.deleteBox.addEventListener('click', deleteBox);

function createBox() {
  const newBox = document.createElement('div');
  newBox.classList.add('box-item');
  newBox.innerText = document.querySelectorAll('.box-item').length + 1;
  newBox.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  newBox.style.width = boxWidthInput.value + 'px';
  newBox.style.height = boxHeightInput.value + 'px';
  boxgrp.appendChild(newBox);
}

function deleteBox() {
  if (boxgrp.lastChild && boxgrp.lastChild.classList.contains('box-item')) {
    boxgrp.removeChild(boxgrp.lastChild);
  }
}

// // This feature allows the user to change the flex-direction property with selected values from the radio buttons

// const flexdir = document.getElementsByName('directions');

// for (let i = 0; i < flexdir.length; i++) {
//   flexdir[i].addEventListener('click', () => {
//     boxgrp.style.flexDirection = flexdir[i].value;
//   });
// }

// // This feature allows the user to change the justify-content property with selected values from the radio buttons

// const flexjst = document.getElementsByName('justify');

// for (let i = 0; i < flexjst.length; i++) {
//   flexjst[i].addEventListener('click', () => {
//     boxgrp.style.justifyContent = flexjst[i].value;
//   });
// }

// // This feature allows the user to change the align-items property with selected values from the radio buttons

// const flexitm = document.getElementsByName('alignI');

// for (let i = 0; i < flexitm.length; i++) {
//   flexitm[i].addEventListener('click', () => {
//     boxgrp.style.alignItems = flexitm[i].value;
//   });
// }

// // This feature allows the user to change the align-content property with selected values from the radio buttons

// const flexcnt = document.getElementsByName("alignC")

// for (let i = 0; i < flexcnt.length; i++) {
//   flexcnt[i].addEventListener('click', () => {
//     boxgrp.style.alignContent = flexcnt[i].value;
//   });
// }

// // This feature allows the user to change the flex-wrap property with selected values from the radio buttons

// const flexwrp = document.getElementsByName("wrap")

// for (let i = 0; i < flexwrp.length; i++) {
//   flexwrp[i].addEventListener('click', () => {
//     // Update flex-wrap property
//     boxgrp.style.flexWrap = flexwrp[i].value;

//     // Check if flex-wrap value is other than "nowrap"
//     if (flexwrp[i].value !== "nowrap") {
//       // Enable align-content radio buttons
//       enableRadioButtons(flexcnt);
//     } else {
//       // Disable align-content radio buttons
//       disableRadioButtons(flexcnt);
//     }
//   });
// }

// // Helper function to enable radio buttons
// function enableRadioButtons(radios) {
//   for (let i = 0; i < radios.length; i++) {
//     radios[i].disabled = false;
//   }
// }

// // Helper function to disable radio buttons
// function disableRadioButtons(radios) {
//   for (let i = 0; i < radios.length; i++) {
//     radios[i].disabled = true;
//     radios[i].checked = false;
//     boxgrp.style.alignContent = '';
//   }
// }

// // Initially disable align-content radio buttons
// disableRadioButtons(flexcnt);


// ****Shorter and simpler version of the radio button selector:

document.querySelectorAll('[name*="directions"], [name^="justify"], [name^="alignI"], [name^="alignC"], [name^="wrap"]').forEach(radio => {
  radio.addEventListener('click', () => {
    switch (radio.name) {
      case 'directions':
        boxgrp.style.flexDirection = radio.value;
        break;
      case 'justify':
        boxgrp.style.justifyContent = radio.value;
        break;
      case 'alignI':
        boxgrp.style.alignItems = radio.value;
        break;
      case 'alignC':
        boxgrp.style.alignContent = radio.value;
        break;
      case 'wrap':
        boxgrp.style.flexWrap = radio.value;
        document.getElementsByName('alignC').forEach(alignRadio => {
          alignRadio.disabled = (radio.value === 'nowrap');
        });
        break;
    }
  });
});

document.getElementsByName('alignC').forEach(alignRadio => {
  alignRadio.disabled = true;
});

// // Reset Button Functionality - Start

// const reset = document.getElementById('reset');

// let index = 0;

// reset.addEventListener('click', () => {
//   const flexdir = document.getElementsByName('directions');
//   const flexjst = document.getElementsByName('justify');
//   const flexitm = document.getElementsByName('alignI');
//   const flexcnt = document.getElementsByName('alignC');
//   const flexwrp = document.getElementsByName('wrap');
//   for (let i = 0; i < flexdir.length; i++) {
//     flexdir[i].checked = false;
//   }
//   for (let i = 0; i < flexjst.length; i++) {
//     flexjst[i].checked = false;
//   }
//   for (let i = 0; i < flexitm.length; i++) {
//     flexitm[i].checked = false;
//   }
//   for (let i = 0; i < flexcnt.length; i++) {
//     flexcnt[i].checked = false;
//   }
//   for (let i = 0; i < flexwrp.length; i++) {
//     flexwrp[i].checked = false;
//   }
//     boxgrp.style.flexDirection = '';
//     boxgrp.style.justifyContent = '';
//     boxgrp.style.alignItems = '';
//     boxgrp.style.alignContent = '';
//     boxgrp.style.flexWrap = '';
//     index = 0;
//     function resetBox () {
//       const x = document.getElementById('boxgrp');
//       while (x.firstChild) {
//         x.removeChild(x.firstChild);
//       }
//     }
//     resetBox();    
// });

// // Reset Button Functionality - End

// reset.addEventListener('click', () => {
//   const radioButtons = [
//     ...document.getElementsByName('directions'),
//     ...document.getElementsByName('justify'),
//     ...document.getElementsByName('alignI'),
//     ...document.getElementsByName('alignC'),
//     ...document.getElementsByName('wrap')
//   ];

//   radioButtons.forEach(radio => radio.checked = false);

//   boxgrp.style.cssText = `
//     flex-direction: ;
//     justify-content: ;
//     align-items: ;
//     align-content: ;
//     flex-wrap: ;
//   `;

//   boxgrp.innerHTML = '';
// });

reset.addEventListener('click', () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => radio.checked = false);

  boxgrp.style.cssText = `
    flex-direction: ;
    justify-content: ;
    align-items: ;
    align-content: ;
    flex-wrap: ;
  `;
  boxgrp.innerHTML = '';
});
