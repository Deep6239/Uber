const axios = require('axios');
const { text } = require('express');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.MAPTILER_MAPS_API;
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json?key=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;
        
        if (data.features && data.features.length > 0) {
            const location = data.features[0].geometry.coordinates;
            return { ltd: location[1], lng: location[0] };
        } else {
            throw new Error('No results found for the given address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw new Error(`Unable to get coordinates for the address. Error: ${error.message}`);
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required.');
    }

    const apiKey = process.env.OPENROUTESERVICE_API_KEY;

    try{
        const originCoords = await this.getAddressCoordinate(origin);
        const destCoords = await this.getAddressCoordinate(destination);

        const url = `https://api.openrouteservice.org/v2/directions/driving-car`;
        
        const response = await axios.post(url, {
            coordinates: [
                [originCoords.lng, originCoords.ltd], // [longitude, latitude]
                [destCoords.lng, destCoords.ltd]      // [longitude, latitude]
            ]
        }, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
        });

        const data = response.data;

        if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const distanceInMeters = route.summary?.distance;
            const durationInSeconds = route.summary?.duration;

            if (distanceInMeters === undefined || durationInSeconds === undefined) {
                throw new Error('Distance or duration not found in API response');
            }

            const durationInMinutes = Math.round(durationInSeconds / 60);
            const distanceInKm = (distanceInMeters / 1000).toFixed(2);

            return {
                "distance": {
                    "text": `${distanceInKm} km`,
                    "value": distanceInMeters
                },
                "duration": {
                    "text": `${durationInMinutes} mins`,
                    "value": durationInSeconds
                }
            };
        }   
        else{
            throw new Error('No route found between the given locations.');
        }         
    } catch (error) {
        console.error('Error fetching distance and time:', error.response?.data || error.message);
        throw new Error(`Unable to get distance and time. Error: ${error.message}`);
    }
}

module.exports.getSuggestions = async (input) => {
    if(!input) {
        throw new Error('Input is required.');
    }
    const apiKey = process.env.OPENROUTESERVICE_API_KEY;

    try{
        const url = `https://api.openrouteservice.org/geocode/search`;
        
        const response = await axios.get(url, {
            params: {
                api_key: apiKey,
                text: input,
                size: 5,
                languaege: 'en'
            },
            headers: {
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
        });

        const data = response.data;
        if (data.features && data.features.length > 0) {
            return data.features.map(feature => ({
                id: feature.properties.id,
                name: feature.properties.name,
                label: feature.properties.label,
                full_address: feature.properties.label,
                coordinates: feature.geometry.coordinates, // [lng, lat]
                type: feature.properties.layer,
                confidence: feature.properties.confidence,
                country: feature.properties.country,
                region: feature.properties.region,
                county: feature.properties.county,
                locality: feature.properties.locality,
                neighbourhood: feature.properties.neighbourhood,
                street: feature.properties.street
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        throw new Error(`Unable to get suggestions for the input. Error: ${error.message}`);
    }
}