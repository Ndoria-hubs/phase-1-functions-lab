// Code your solution in this file!

// | Scuber Transportation Company;

const hqLocation = 42;


function distanceFromHqInBlocks(start) {
        const hqLocation = 42;
        const numOfBlocks = Math.abs(start - hqLocation);
        return numOfBlocks;
}
distanceFromHqInBlocks(50);
 

function distanceFromHqInFeet (start) {
    const numOfBlocks = Math.abs(start - hqLocation);
    const distanceInFeet =  numOfBlocks * 264;
    return distanceInFeet;
}
distanceFromHqInFeet();


function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs(destination - start);
    let distTravelledInFeet = distanceTravelled * 264;
    return distTravelledInFeet; 
}
distanceTravelledInFeet();


function calculatesFarePrice(start, destination) {

    const distanceTravelled = Math.abs(destination - start);
    let distTravelledInFeet = distanceTravelled * 264;

    let price;

    if(distTravelledInFeet < 401 ){
        price = 0
    } else if( distTravelledInFeet >400 && distTravelledInFeet<= 2000) {
        let actualDist = distTravelledInFeet - 400;
        price = actualDist* 0.02
    } else if( distTravelledInFeet > 2000 && distTravelledInFeet <= 2500) {
        price = 25;
    } else {
        return 'cannot travel that far'
    }
    return price;
};
calculatesFarePrice;




