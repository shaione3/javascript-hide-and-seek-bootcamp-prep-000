
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

// function increaseRankBy(n){
//
//   const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li');
//
//   for(let i = 0; i < rankedLists.length; i++){
//     rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML, 10) + n;
//   }
//
// }

// Answer above was my solution, but below solution doesn't require targeting the specific child selector when defining the rankedLists variable

function increaseRankBy(n){

  const rankedLists = document.querySelectorAll('.ranked-list');

  for(let i = 0; i < rankedLists.length; i++){
    let rankedListsChildren = rankedLists[i].children

    for(let j = 0; j < rankedListsChildren.length; j++){
      rankedListsChildren[j].innerHTML = parseInt(rankedListsChildren[j].innerHTML, 10) + n;
    }
  }
}

// My initial solution was totally jenky, but worked well enough to pass the test :P 
// Belwo is the approved final solution.
// Had I more closely read the previous lesson, I'd have known about .children :P
// have to initially define nextNode = node.children[0] otherwise it has no value and is falsy
// and while loop won't run

function deepestChild(){

  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while(nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
