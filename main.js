(() => {
  const weatherPlaceholder = {
    coord: { lon: 18.19, lat: 59.25 },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" },
    ],
    base: "stations",
    main: {
      temp: 10.91,
      feels_like: 6.53,
      temp_min: 10.56,
      temp_max: 11.11,
      pressure: 1005,
      humidity: 66,
    },
    visibility: 10000,
    wind: { speed: 4.6, deg: 240 },
    rain: { "1h": 0.53 },
    clouds: { all: 100 },
    dt: 1589549022,
    sys: {
      type: 1,
      id: 1788,
      country: "SE",
      sunrise: 1589508842,
      sunset: 1589570000,
    },
    timezone: 7200,
    id: 2726394,
    name: "Älta",
    cod: 200,
  };

  const getKey = async () => {
    return new Promise(async (resolve) => {
      const response = await fetch("./private/api_key.php");
      const json = await response.json();
      resolve(json);
    });
  };

  const request = async (endpoint) => {
    const response = await fetch(endpoint);
    const json = await response.json();

    return json;
  };

  const getLocalWeather = async (latitude, longitude) => {
    const apiKey = await getKey().then((json) => {
      return json.key;
    });
    console.log(apiKey);
    console.log("Found coordinates: ", latitude, longitude);

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const res = await request(endpoint);
    console.log(res);
  };

  /*  const getLocation = () => {
    if (navigator.geolocation) {

      
    }
  } */

  const geolocate = () => {
    if (window.navigator && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onGeolocateSuccess,
        onGeolocateError
      );
    }
  };

  const onGeolocateSuccess = (coordinates) => {
    const { latitude, longitude } = coordinates.coords;
    console.log("Found coordinates: ", latitude, longitude);

    getLocalWeather(latitude, longitude);
  };

  const onGeolocateError = (error) => {
    console.warn(error.code, error.message);

    if (error.code === 1) {
      // they said no
    } else if (error.code === 2) {
      // position unavailable
    } else if (error.code === 3) {
      // timeout
    }
  };

  geolocate();
})();
