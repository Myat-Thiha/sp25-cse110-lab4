let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    yellowCars: 2
}

for(let i in statistics){
    if(i[0] == 'r' || statistics[i] % 2 == 1){
        console.log(statistics[i]);
    }
}