

function sortBubble(ar) {
  ar
  let timeArrayItem = 0  
  for (let j = 0; j < ar.length; j++) {
    for (let i = 0; i < ar.length-j; i++) {
      if(ar[i] > ar[i+1]){
        timeArrayItem = ar[i]
        ar[i] = ar[i + 1]
        ar[i + 1] = timeArrayItem;
      }
  }
  }
  return ar;
}

// sortBubble([10,8,7,]) //?

// let arr = sortBubble(Array(100).fill(null).map((i) => i = Math.floor(Math.random() * 150 + 1))); //?
// arr;

const binarySearch = function (ar,key) {
  let start = 0 //?
  let end = ar.length -1 //?
  let mid;
  let count = 0;
  
  for (; start <= end ; ) {
    count+=1
    mid = Math.floor((start + end) /2) //?
    ar[mid] //?
    
    if (key > ar[mid]) {  start = mid + 1  }
    if (key < ar[mid]) {  end = mid - 1  }
    if (key === ar[mid]) {
      return {
        count: count,
        key: ar[mid],
      };
    }
  }
}

// let ss = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1); //?
// ss
// // let sss = binarySearch(arr, 40); //?
// sss