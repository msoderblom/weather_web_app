(() => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getKeys = async () => {
    return new Promise(async (resolve) => {
      const response = await fetch("./private/api_keys.php");
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
    const apiKey = await getKeys().then((json) => {
      return json.weather_key;
    });

    const endpoint1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const currentWeather = await request(endpoint1);

    const endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&units=metric&appid=${apiKey}`;
    const weatherForecast = await request(endpoint2);

    /*  const currentWeather = weatherPlaceholder;
    const weatherForecast = forecastPlaceholder; */

    renderWeatherInfo(currentWeather, weatherForecast);
  };

  const renderWeatherInfo = (currentWeather, weatherForecast) => {
    const currentSection = document.querySelector("#currentWeather");
    const hourlySection = document.querySelector("#hourlyForecast");
    const dailySection = document.querySelector("#dailyForecast");

    const currentContent = `<div class="current-weather__main-info">
                            
                              <p class="current-weather__main-info__temp">${Math.round(
                                currentWeather.main.temp
                              )}&deg;</p>
                              <div class="current-weather__main-info__extra-info">
                                <h2 class="current-weather__main-info__extra-info__place">${
                                  currentWeather.name
                                }</h2>
                                <div class="current-weather__main-info__extra-info__icon">
                                  <img src="https://openweathermap.org/img/wn/${
                                    currentWeather.weather[0].icon
                                  }@2x.png" alt="Weather icon">
                                </div>
                                <p class="current-weather__main-info__extra-info__description">${
                                  currentWeather.weather[0].description
                                }</p>
                                <p class="current-weather__main-info__extra-info__feels-like">Feels like: ${
                                  Math.round(
                                    currentWeather.main.feels_like * 10
                                  ) / 10
                                }&deg;C</p>
                              </div>
                              
                            </div>
                            <div class="current-weather__extra">
                            <p class="current-weather__extra__weekday">
                            ${
                              weekdays[
                                unixToDay(
                                  weatherForecast.timezone_offset +
                                    weatherForecast.daily[0].dt
                                )
                              ]
                            }
                            </p>
                            <p class="current-weather__extra__wind">Wind: ${
                              currentWeather.wind.speed
                            } m/s</p>
                            <p class="current-weather__extra__min-temp">${Math.round(
                              weatherForecast.daily[0].temp.min
                            )}&deg;</p>
                            <p class="current-weather__extra__max-temp">${Math.round(
                              weatherForecast.daily[0].temp.max
                            )}&deg;</p>
                            </div>
                          `;

    currentSection.innerHTML = currentContent;

    let hours = `<th class="now">Now</th>`;

    hours += weatherForecast.hourly
      .slice(1)
      .map((hour) => {
        return `<th>${unixToHours(
          weatherForecast.timezone_offset + hour.dt
        )}</th>`;
      })
      .join("");
    let weatherIcons = `<td class="now icon"><div><img class="icon-${currentWeather.weather[0].icon}" src="https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png" alt="Weather icon: ${currentWeather.weather[0].description}"></div></td>`;

    weatherIcons += weatherForecast.hourly
      .slice(1)
      .map((hour) => {
        return `<td><div><img class="icon-${hour.weather[0].icon}" src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png" alt="Weather icon: ${hour.weather[0].description}"></div></td>`;
      })
      .join("");
    let temps = `<td class="now">${Math.round(
      currentWeather.main.temp
    )}&deg;</td>`;

    temps += weatherForecast.hourly
      .slice(1)
      .map((hour) => {
        return `<td>${Math.round(hour.temp)}&deg;</td>`;
      })
      .join("");

    let hourlyTable = `<table class="hourly-forecast__table">
                        <tbody>
                          <tr>${hours}</tr>
                          <tr>${weatherIcons}</tr>
                          <tr>${temps}</tr>
                        </tbody>
                      </table>`;

    hourlySection.innerHTML = hourlyTable;

    const days = weatherForecast.daily
      .slice(1)
      .map((day) => {
        const weekday =
          weekdays[unixToDay(weatherForecast.timezone_offset + day.dt)];

        return `<tr>
        <td class="daily-forecast__table__body__weekday">${weekday}</td>
        <td class="daily-forecast__table__body__weather-icon"><div><img src="https://openweathermap.org/img/wn/${
          day.weather[0].icon
        }@2x.png" alt="Weather icon: ${day.weather[0].description}"></div></td>
        <td class="daily-forecast__table__body__min-temp">${Math.round(
          day.temp.min
        )}&deg;</td>
        <td class="daily-forecast__table__body__max-temp">${Math.round(
          day.temp.max
        )}&deg;</td>
      </tr>`;
      })
      .join("");

    const dailyTable = `<table class="daily-forecast__table"><tbody class="daily-forecast__table__body">${days}</tbody></table>`;
    dailySection.innerHTML = dailyTable;
  };

  const unixToHours = (unixTimestamp) => {
    const dateObj = new Date(unixTimestamp * 1000);
    let hours = dateObj.getUTCHours();
    hours = hours.toString().padStart(2, "0");
    return hours;
  };

  const unixToDay = (unixTimestamp) => {
    const dateObj = new Date(unixTimestamp * 1000);
    return dateObj.getDay();
  };

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
  const autoComplete = async (e) => {
    const searchWord = e.currentTarget.value.toLowerCase();

    if (searchWord == "" || searchWord == null) {
      document.querySelector("#suggestionList").innerHTML = "";
      return;
    }

    const apiKey = await getKeys().then((json) => {
      return json.here_key;
    });

    const endpoint = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(
      searchWord
    )}&lang=en&apiKey=${apiKey}`;
    const suggestions = await request(endpoint);

    renderSuggestions(suggestions);
  };

  const renderSuggestions = (suggestionsObj) => {
    suggestions = suggestionsObj.items;

    const listitems = suggestions
      .map((suggestion) => {
        return `<li class="suggestion-listitem search-position__suggestion-list__listitem" data-lat="${suggestion.position.lat}" data-long="${suggestion.position.lng}">${suggestion.title}</li>`;
      })
      .join("");

    const suggestionList = document.querySelector("#suggestionList");
    suggestionList.innerHTML = listitems;

    document.querySelectorAll(".suggestion-listitem").forEach((listitem) => {
      listitem.addEventListener("click", getSearchedWeather);
    });
  };
  const getSearchedWeather = async (e) => {
    const latitude = e.currentTarget.dataset.lat;
    const longitude = e.currentTarget.dataset.long;
    const apiKey = await getKeys().then((json) => {
      return json.weather_key;
    });

    const endpoint1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const currentWeather = await request(endpoint1);

    const endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&units=metric&appid=${apiKey}`;
    const weatherForecast = await request(endpoint2);

    // Reset
    document.querySelector("#searchSection").classList.toggle("hide");
    document.querySelector(".weather-info").classList.toggle("blur");
    document.querySelector(".footer").classList.toggle("blur");
    document.querySelector("#searchInput").value = "";
    document.querySelector("#suggestionList").innerHTML = "";
    renderWeatherInfo(currentWeather, weatherForecast);
  };

  document
    .querySelector("#searchInput")
    .addEventListener("change", autoComplete);
  document
    .querySelector("#searchInput")
    .addEventListener("keyup", autoComplete);
  document.querySelector("#search-pos-btn").addEventListener("click", (e) => {
    document.querySelector("#searchSection").classList.toggle("hide");
    document.querySelector(".weather-info").classList.toggle("blur");
    document.querySelector(".footer").classList.toggle("blur");
  });
  document.querySelector("#cancel-btn").addEventListener("click", (e) => {
    document.querySelector("#searchSection").classList.toggle("hide");
    document.querySelector(".weather-info").classList.toggle("blur");
    document.querySelector(".footer").classList.toggle("blur");
  });
  document
    .querySelector("#current-pos-btn")
    .addEventListener("click", geolocate);
})();
