const sortParties = (parties) => {


  const compare = (a, b) => {

    let first = a.listName.value.toLowerCase()
    let second = b.listName.value.toLowerCase()
    // a should come before b in the sorted order
    if (first < second) {
      return -1;
      // a should come after b in the sorted order
    } else if (first > second) {
      return 1;
      // and and b are the same
    } else {
      return 0;
    }
  }

  let sorted = parties.sort(compare)

  return sorted
}

const sortCandidates = (candidates) => {


  const compare = (a, b) => {

    let first = a.name.value.toLowerCase()
    let second = b.name.value.toLowerCase()
    // a should come before b in the sorted order
    if (first < second) {
      return -1;
      // a should come after b in the sorted order
    } else if (first > second) {
      return 1;
      // and and b are the same
    } else {
      return 0;
    }
  }

  let sorted = candidates.sort(compare)

  return sorted
}

export { sortParties, sortCandidates }