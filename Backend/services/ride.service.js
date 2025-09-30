const rideModel = require('../models/ride.model');
const mapsService = require('../services/maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required to calculate fare');
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination);

    const { distance, duration } = distanceTime;

    // Example fare calculation (values can be adjusted as needed)
    const baseFare = {
        auto: 30,
        car: 50,
        bike: 20
    };
    const perKmRate = {
        auto: 10,
        car: 15,
        bike: 7
    };
    const perMinRate = {
        auto: 1,
        car: 2,
        bike: 0.5
    };

    // Assuming distance in km and duration in minutes
    const fares = {
        auto: baseFare.auto + ((distance.value /1000) * perKmRate.auto) + ((duration.value / 60) * perMinRate.auto),
        car: baseFare.car + ((distance.value / 1000) * perKmRate.car) + ((duration.value / 60) * perMinRate.car),
        bike: baseFare.bike + ((distance.value / 1000) * perKmRate.bike) + ((duration.value / 60) * perMinRate.bike)
    };

    return fares;
}

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required to create a ride');
    }

    const fares = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fares[vehicleType],
    });

    return ride; 
}

