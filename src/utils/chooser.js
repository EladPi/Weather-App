import { iconData, backGroundData } from "./data";

export const assentChooser = (text, p = 1, type= 'icon') => {
    let iconResult = '';
    let backGroundResult = '';

    if (p == 1) { //Day
        if (text.toLowerCase().includes('sun')) {
            iconResult = iconData.day.clear.day;
            backGroundResult = backGroundData.day.clear;
        }
        else if (text.toLowerCase().includes('clear')) {
            iconResult = iconData.day.clear.day;
            backGroundResult = backGroundData.day.clear;
        }
        else if (text.toLowerCase().includes('fog') || text.toLowerCase().includes('mist')) {
            iconResult = iconData.day.fog.fog;
            backGroundResult = backGroundData.day.fog;
        }
        else if (text.toLowerCase().includes('partly cloudy')){
            iconResult = iconData.day.cloudy["cloudy-day-2"]
            backGroundResult = backGroundData.day.cloudy;
        }
        else if (text.toLowerCase().includes('cloudy') || text.toLowerCase().includes('overcast')) {
            iconResult = iconData.day.cloudy.cloudy;
            backGroundResult = backGroundData.day.cloudy;
        }
        else if (text.toLowerCase().includes('rain') || text.toLowerCase().includes('drizzle')) {
            if (text.toLowerCase().includes('light rain')) {
                iconResult = iconData.day.rainy["sunny-rain"];
                backGroundResult = backGroundData.day["heavy-rain"];
            }
            else {
                iconResult = iconData.day.rainy["cloudy-rain"]
                backGroundResult = backGroundData.day["heavy-rain"];
            }
        }
        else if (text.toLowerCase().includes('snow')) {
            if (text.toLowerCase().includes('light snow')) {
                iconResult = iconData.day.snowy["sunny-snow"];
                backGroundResult = backGroundData.day["snow-day"];
            }
            else {
                iconResult = iconData.day.snowy["cloudy-snow"];
                backGroundResult = backGroundData.day["snow-day"];
            }
        }
        else if (text.toLowerCase().includes('storm')) {
            iconResult = iconData.day.thunder.thunder;
            backGroundResult = backGroundData.day.storm;
        }
        else if (text.toLowerCase().includes('thunder')) {
            iconResult = iconData.day.thunder.thunder;
            backGroundResult = backGroundData.day.storm;
        }
    }

    else { //Night 
        if (text.toLowerCase().includes('clear')) {
            iconResult = iconData.night.clear.night;
            backGroundResult = backGroundData.night.clear;
        }
        else if (text.toLowerCase().includes('partly cloudy')){
            iconResult = iconData.night.cloudy["cloudy-night-2"]
            backGroundResult = backGroundData.night.clear;
        }
        else if (text.toLowerCase().includes('fog') || text.toLowerCase().includes('mist')) {
            iconResult = iconData.night.fog.fog;
            backGroundResult = backGroundData.night.fog;
        }
        else if (text.toLowerCase().includes('cloud') || text.toLowerCase().includes('overcast')) {
            iconResult = iconData.night.cloudy.cloudy;
            backGroundResult = backGroundData.night.cloudy;
        }
        else if (text.toLowerCase().includes('rain') || text.toLowerCase().includes('drizzle')) {
            iconResult = iconData.night.rainy["cloudy-rain"]
            backGroundResult = backGroundData.night["heavy-rain"];
        }
        else if (text.toLowerCase().includes('snow')) {
            iconResult = iconData.night.snowy["cloudy-snow"];
            backGroundResult = backGroundData.night["heavy-rain"];
        }
        else if (text.toLowerCase().includes('storm')) {
            iconResult = iconData.night.thunder.thunder;
            backGroundResult = backGroundData.night.storm;
        }
        else if (text.toLowerCase().includes('thunder')) {
            iconResult = iconData.night.thunder.thunder;
            backGroundResult = backGroundData.night.storm;
        }
    }
    return type == 'icon' ? iconResult : backGroundResult ; 
}
