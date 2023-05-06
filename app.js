const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon', 'puedes'];
const extencions = ['.com','.es','.org','.io'];

const listDomain = document.querySelector('#domain-list');
const btnPrintListDomain = document.querySelector('#btn-print-domain');

const generateCombinations = (arr1, arr2, arr3) => {
    let combinations = [];
    
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          combinations.push([arr1[i], arr2[j], arr3[k]].join(''));
        }
      }
    }
    
    return combinations;
  }
  
  
const addExtensionToCombinations = (combinations, extencions) => {
  const domains = [];
  combinations.forEach(nameDomain => {
    extencions.forEach( item => domains.push(`${nameDomain}${item}`))
  });
  return domains;
}

const printListDomain = (domains) => {
  domains.forEach(element =>{
    listDomain.innerHTML += `<li class = 'list-group-item'>${element}</li>`
  })
}

btnPrintListDomain.addEventListener('click', ()=>{
  const combinations = generateCombinations(pronoun, adj, noun);
  const domains = addExtensionToCombinations(combinations, extencions);
  
   printListDomain(domains);
})