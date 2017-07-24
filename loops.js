function forLoop(array){
  for (let i = 0; i < 25 ; i++) {
      array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
    }
     return array;
}

function whileLoop(number){
  while(number >0){
    console.log(number)
    number = number - 1
  }

  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
    return array;
  } while(array.length>0 && maybeTrue() )
}
