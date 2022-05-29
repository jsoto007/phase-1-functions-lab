// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance
  };
}

function newDistance(distance) {
  return 300;
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start >= end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}











// function distanceFromHqInBlocks(distances) {
//   if (distances >= 42) {
//     return distances - 42;
//   } else {
//     return 42 - distances;
//   }

// }

// function newDistance(distance) {
//   return 300

// }

// function distanceFromHqInFeet(distances) {
//   if (distances >= 42) {
//     return (distances - 42) * 264;
//   } else {
//     return (42 - distances) * 264;
//   }
// }

// function distanceTravelledInFeet(startPoint, endPoint) {
//   if (startPoint >= endPoint) {
//     return (startPoint - endPoint) * 264;
//   } else {
//     return (endPoint - startPoint) * 264;
//   }
// }

// function calculatesFarePrice(start, destination) {
//   const tripDistance = distanceTravelledInFeet(start, destination);
//   if (tripDistance <= 400) {
//     return 0;
//   } else if (tripDistance > 400 && tripDistance <= 2000) {
//     return (tripDistance - 400) * 0.02;

//   } else if (tripDistance > 2000 && tripDistance < 2500) {
//     return 25;
//   } else if (tripDistance > 2500) {
//     return 'cannot travel that far'
//   }
// }
