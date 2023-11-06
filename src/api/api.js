const API_KEY = 'c1bce46ec695457abac122001232910'; //  with API key from weatherapi.com
const BASE_URL = 'https://api.weatherapi.com/v1';


export const getWeeklyForecast = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch weekly forecast');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};


export const getHourlyForecast = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&hour`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch hourly forecast');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};


export async function fetchCityName(lat, lon) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&language=en`);
    const data = await response.json();
    return data.address.city || data.address.town || data.address.village || data.address.state || data.address.region || 'Unknown Location';
}

