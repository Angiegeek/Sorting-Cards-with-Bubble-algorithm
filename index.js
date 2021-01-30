function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));


//////////////////////////////////////



const selection = arr => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

  arr.forEach((item, i) => {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    };
    swap(arr, i, min);
  });

  return arr;
};

console.log(selection([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));