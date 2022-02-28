import icon_01d from "../assets/01d.png";
import icon_02d from "../assets/02d.png";
import icon_03d from "../assets/03d.png";
import icon_04d from "../assets/04d.png";
import icon_09d from "../assets/09d.png";
import icon_10d from "../assets/10d.png";
import icon_11d from "../assets/11d.png";
import icon_13d from "../assets/13d.png";
import icon_50d from "../assets/50d.png";

import icon_01n from "../assets/01n.png";
import icon_02n from "../assets/02n.png";
import icon_10n from "../assets/10n.png";
import icon_11n from "../assets/11n.png";
import icon_13n from "../assets/13n.png";

function WeatherIcon({ icon, img }) {
  switch (icon) {
    case "01d":
      return <img src={icon_01d} alt="Clear sky" />;
    case "02d":
      return <img src={icon_02d} alt="Few clouds" />;
    case "03d":
      return <img src={icon_03d} alt="Scattered clouds" />;
    case "04d":
      return <img src={icon_04d} alt="Broken clouds" />;
    case "09d":
      return <img src={icon_09d} alt="Shower rain" />;
    case "10d":
      return <img src={icon_10d} alt="Rain" />;
    case "11d":
      return <img src={icon_11d} alt="Thunderstorm" />;
    case "13d":
      return <img src={icon_13d} alt="Snow" />;
    case "50d":
      return <img src={icon_50d} alt="Mist" />;
    case "01n": //
      return <img src={icon_01n} alt="Clear sky" />;
    case "02n":
      return <img src={icon_02n} alt="Few clouds" />;
    case "03n":
      return <img src={icon_03d} alt="Scattered clouds" />;
    case "04n":
      return <img src={icon_04d} alt="Broken clouds" />;
    case "09n":
      return <img src={icon_09d} alt="Shower rain" />;
    case "10n":
      return <img src={icon_10n} alt="Rain" />;
    case "11n":
      return <img src={icon_11n} alt="Thunderstorm" />;
    case "13n":
      return <img src={icon_13n} alt="Snow" />;
    case "50n":
      return <img src={icon_50d} alt="Mist" />;
    default:
      return <img src={img} alt="Imagen del clima" />;
  }
}

export default WeatherIcon;
