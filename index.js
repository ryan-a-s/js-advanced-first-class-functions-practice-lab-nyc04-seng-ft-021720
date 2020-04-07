// Code your solution in this file!

function logDriverNames(arr) {
  arr.forEach(function(el) {
    console.log(el.name);
  });
};

function logDriversByHometown(arr, loc) {
  arr.forEach(function(el) {
    if (el.hometown === loc) {
      console.log(el.name);
    }
  })
};

function driversByRevenue(arr) {

  // copy each element of original array into new array
  let newArray = [...arr];

  // sort drivers by revenue in descending order
  newArray.sort((a, b) => a.revenue - b.revenue);

  // return sorted array
  return newArray;
}

function driversByName(arr) {

  // copy elements from original array into new
  let newArray = [...arr];
  // sort drivers by name from A to Z
  newArray.sort((a, b) => a.name.localeCompare(b.name));
  return newArray;
}

function totalRevenue(arr) {
  let total = arr.reduce(function(agg, el) {
    return agg + el.revenue;
  }, 0);
    return total;
}

function averageRevenue(arr) {
  let total = arr.reduce(function(agg, el) {
    return agg + el.revenue;
  }, 0);
    return total / arr.length;
}