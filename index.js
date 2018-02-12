
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){

  const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for(let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML, 10) + n;
  }

}

function deepestChild(){

  let current = document.getElementById('grand-node').querySelectorAll('div');
  let next = [];

  while(current){
    if(current.innerText === "boo!"){
      return current;
    }

    for(let i = 0; i < current.length; i++){
      next.push(current[i]);
    }

    current = next.shift();
  }

}
