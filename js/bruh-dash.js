var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
      return array[0];
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
      for (var i=0; i<arr.length; i++){
          if(arr[i] === val){
            return i
          }
        }
        return -1
      },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, val) {
    for (var i=arr.length-1; i>=0; i--){
      if(arr[i] === val){
        return i
      }
    }
    return -1
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
      var newArr = arr.pop();
      return arr
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var result = [];
    var falsey = [false, null, 0, '', undefined, NaN];
    for (var i=0; i<arr.length;i++){
      if(!falsey.includes(arr[i])) {
        result.push(arr[i])
      }
    }
    return result
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var result = [];
  
    for (var i=start;i<end;i++){
      result.push(arr[i])
    }
    return result

  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
      var result = [];
        if(num === 0){
          return arr
      } else if (num === undefined){
          arr.shift();
          return arr
      } else if (num > (arr.length-1)) {
        return result
      } else if (num < (arr.length)) {
        arr.splice(0, num)
        return arr
      }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    var result = [];
      if (num === 0) {
        return arr
      } else if (num === undefined){
        arr.pop();
        return arr
      } else if (num > (arr.length-1)) {
        return result
      } else if (num < (arr.length)){
        num = ((arr.length-1)-1)
        result = arr.splice(num)
        return arr
      }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var result = [];
    if (num === 0){
      return result;
    } else if (num === undefined){
      var newNum = arr.shift();
      result.push(newNum);
      return result;
    } else if (num > arr.length -1){
      return arr
    } else if (num < arr.length){
      for (var i=0; i<num; i++){
        result.push(arr[i])
      }
      return result
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    var result = [];
    if (num === undefined){
      result.push(arr[arr.length-1])
      return result
    } else if (num > arr.length-1){
      return arr
    } else if (num === 0){
      return result
    } else if (num < arr.length) {
      num = (arr.length - num)
      result = arr.splice(num)
      return result
    }

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
      if (start === undefined && end === undefined) {
        start = 0;
        end = arr.length;
      } 
      for (var i=start; i<end; i++){
        arr[i] = val
      }
      return arr
  },

  // removes all given values from an array
  pull: function (arr, val1, val2) {
    // how do i know how many paramenters there should be? 
    var result = [];
    for (var i=0; i<arr.length; i++){
      if (arr[i] !== val1 && arr[i] !== val2 ) {
        result.push(arr[i])
      }
    }
    return result

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, arrPull) {
         var result = [];
          for (var i =0; i<arr.length; i++){
            if (!arrPull.includes(i)) {
              result.push(arr[i])
            }
          }
          return result
  },

  // creates an array excluding all the specified values
  without: function(arr, arrPull) {
    var result = [];
          for (var i =0; i<arr.length; i++){
            if (!arrPull.includes(arr[i])) {
              result.push(arr[i])
            }
          }
          return result
  },

  // returns an array with specified values excluded
  difference: function(arr, arrPull) {
    var result = [];
          for (var i =0; i<arr.length; i++){
            if (!arrPull.includes(arr[i])) {
              result.push(arr[i])
            }
          }
          return result
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  // how do i know the arrays will have the same amount of elements? 
  zip: function (arr1, arr2) {  
    var result = [];
    for (var i=0; i<arr1.length;i++){
      var newArr = [];
      newArr.push(arr1[i], arr2[i])
      result.push(newArr)
    }
    return result

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr1, arr2) {
    var result = [];
    var newArr = [];
    var newArr2 = [];
   for (var i=0; i<arr1.length;i++){
      newArr.push(arr1[i][0])
      newArr2.push(arr1[i][1])
   }
  result.push(newArr, newArr2)
  return result
  },

  // creates an array of elements into groups of length of specified size
  chunk: function (){
  },
 

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
