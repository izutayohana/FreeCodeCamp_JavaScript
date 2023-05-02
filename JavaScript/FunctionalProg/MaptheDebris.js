function orbitalPeriod(arr) {
  
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++){
      let alt = arr[i].avgAlt
    let t = Math.round((2*Math.PI)*Math.sqrt(((alt+earthRadius)**3)/GM))
    arr[i].orbitalPeriod = t;
    delete arr[i].avgAlt;
    } return arr;
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));