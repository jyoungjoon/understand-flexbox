const addBox = document.getElementById('addBox');
const deleteBox = document.getElementById('deleteBox');
const reset = document.getElementById('reset');

const btndir = document.getElementById('btndir');
const disdir = document.getElementById('disdir');
const arraydir = ["row", "row-reverse", "column", "column-reverse"];
const boxgrp = document.getElementById('boxgrp')

const btnjst = document.getElementById('btnjst');
const disjst = document.getElementById('disjst');
const arrayjst = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];

const btnitm = document.getElementById('btnitm');
const disitm = document.getElementById('disitm');
const arrayitm = ["stretch", "flex-start", "flex-end", "center", "baseline"];

const btncnt = document.getElementById('btncnt');
const discnt = document.getElementById('discnt');
const arraycnt = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];

const btnwrp = document.getElementById('btnwrp');
const diswrp = document.getElementById('diswrp');
const arraywrp = ["nowrap", "wrap", "wrap-reverse"];

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

let index = 0;

reset.addEventListener('click', () => {
    boxgrp.style.flexDirection = 'row';
    boxgrp.style.justifyContent = "flex-start";
    boxgrp.style.alignItems = "stretch";
    boxgrp.style.alignContent = "flex-start";
    boxgrp.style.flexWrap = "nowrap";
    disdir.innerText = "row";
    disjst.innerText = "flex-start";
    disitm.innerText = "stretch";
    discnt.innerText = "flex-start";
    diswrp.innerText = "nowrap";
    index = 0;
});

btndir.addEventListener('click', () => {
    boxgrp.style.flexDirection = arraydir[index]
    disdir.innerText = arraydir[index]
    index = (index + 1) % arraydir.length;
});

btnjst.addEventListener('click', () => {
    const flexDirection = boxgrp.style.flexDirection;
    if (flexDirection === "row" || flexDirection === "row-reverse") {
        boxgrp.style.justifyContent = arrayjst[index];
    } else {
        boxgrp.style.alignItems = arrayjst[index];
    }
    disjst.innerText = arrayjst[index];
    index = (index + 1) % arrayjst.length;
});

btnitm.addEventListener('click', () => {
    boxgrp.style.alignItems = arrayitm[index]
    disitm.innerText = arrayitm[index];
    index = (index + 1) % arrayitm.length;
});

btncnt.addEventListener('click', () => {
    boxgrp.style.alignContent = arraycnt[index]
    discnt.innerText = arraycnt[index];
    index = (index + 1) % arraycnt.length;
});

btnwrp.addEventListener('click', () => {
    boxgrp.style.flexWrap = arraywrp[index]
    diswrp.innerText = arraywrp[index];
    index = (index + 1) % arraywrp.length;
});


