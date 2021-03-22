const mapToNegativize = (sourceArray) => {
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * -1);
  }
  return newArray;
}

const mapToNoChange = (sourceArray) => {
  return [...sourceArray];
}

const mapToDouble = (sourceArray) => {
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2);
  }
  return newArray;
}

const mapToSquare = (sourceArray) => {
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * sourceArray[i]);
  }
  return newArray;
}

const reduceToTotal = (sourceArray, startingPoint) => {
  let runningTotal = startingPoint || 0;
  for(let i = 0; i < sourceArray.length; i++) {
    runningTotal += sourceArray[i];
  }
  return runningTotal;
}

const reduceToAllTrue = (sourceArray) => {
  let result = true;
  for(let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i] === false) {
      result = false;
    }
  }
  return result;
}

const reduceToAnyTrue = (sourceArray) => {
  let result = false;
  for(let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i] === true)
    result = true;
  }
  return result;
}
