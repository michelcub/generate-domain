const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racoon'];

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
  
  
const addExtensionToCombinations = (combinations) => {
  const domains = [...combinations.map(item => `${item}.com`)];

  return domains;
}

const combinations = generateCombinations(pronoun, adj, noun);

console.log('addExtensionToCombinations: ', addExtensionToCombinations(combinations));
