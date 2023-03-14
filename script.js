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

const reset = document.getElementById('reset');
const boxgrp = document.getElementById('boxgrp')

const box = {
  addBox: document.getElementById('addBox'),
  deleteBox: document.getElementById('deleteBox')
}
// This feature adds box-items with the click of a button
box.addBox.addEventListener('click', createBox);

  function createBox() {
    const newBox = document.createElement('div');
    newBox.classList.add('box-item');
    const boxCount = document.getElementsByClassName('box-item').length;
    newBox.innerText = (boxCount + 1);
    const boxgrp = document.getElementById('boxgrp');
    boxgrp.appendChild(newBox);
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    newBox.style.backgroundColor = '#' + randomColor;
  }
// This feature removes box-items with the click of a button
  box.deleteBox.addEventListener('click', deleteBox);

  function deleteBox() {
    const boxgrp = document.getElementById('boxgrp');
    const boxCount = document.getElementsByClassName('box-item').length;
    if (boxCount > 0) {
      boxgrp.removeChild(boxgrp.lastChild);
    }
  }



const dir = {
  btn: document.getElementById('btndir'),
  dis: document.getElementById('disdir'),
  array: ["row", "row-reverse", "column", "column-reverse"]
}

const jst = {
  btn: document.getElementById('btnjst'),
  dis: document.getElementById('disjst'),
  array: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
}

const itm = {
  btn: document.getElementById('btnitm'),
  dis: document.getElementById('disitm'),
  array: ["stretch", "flex-start", "flex-end", "center", "baseline"]
}

const cnt = {
  btn: document.getElementById('btncnt'),
  dis: document.getElementById('discnt'),
  array: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]
}

const wrp = {
  btn: document.getElementById('btnwrp'),
  dis: document.getElementById('diswrp'),
  array: ["nowrap", "wrap", "wrap-reverse"]
}


let index = 0;

reset.addEventListener('click', () => {
    boxgrp.style.flexDirection = '';
    boxgrp.style.justifyContent = '';
    boxgrp.style.alignItems = '';
    boxgrp.style.alignContent = '';
    boxgrp.style.flexWrap = '';
    dir.dis.innerText = '';
    jst.dis.innerText = '';
    itm.dis.innerText = '';
    cnt.dis.innerText = '';
    wrp.dis.innerText = '';
    index = 0;
    function resetBox () {
      const x = document.getElementById('boxgrp');
      while (x.firstChild) {
        x.removeChild(x.firstChild);
      }
    }
    resetBox();    
});

dir.btn.addEventListener('click', () => {
    boxgrp.style.flexDirection = dir.array[index]
    dir.dis.innerText = dir.array[index]
    index = (index + 1) % dir.array.length;
});

jst.btn.addEventListener('click', () => {
    boxgrp.style.justifyContent = jst.array[index]
    jst.dis.innerText = jst.array[index];
    index = (index + 1) % jst.array.length;
});

itm.btn.addEventListener('click', () => {
    boxgrp.style.alignItems = itm.array[index]
    itm.dis.innerText = itm.array[index];
    index = (index + 1) % itm.array.length;
});

cnt.btn.addEventListener('click', () => {
    boxgrp.style.alignContent = cnt.array[index]
    cnt.dis.innerText = cnt.array[index];
    index = (index + 1) % cnt.array.length;
});

wrp.btn.addEventListener('click', () => {
    boxgrp.style.flexWrap = wrp.array[index]
    wrp.dis.innerText = wrp.array[index];
    index = (index + 1) % wrp.array.length;
});