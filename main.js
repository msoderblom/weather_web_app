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
  const forecastPlaceholder = {
    lat: 59.25,
    lon: 18.19,
    timezone: "Europe/Stockholm",
    hourly: [
      {
        dt: 1589878800,
        temp: 11.61,
        feels_like: 7.44,
        pressure: 1011,
        humidity: 62,
        dew_point: 4.58,
        clouds: 99,
        wind_speed: 4.23,
        wind_deg: 23,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589882400,
        temp: 10.79,
        feels_like: 7.6,
        pressure: 1011,
        humidity: 58,
        dew_point: 2.87,
        clouds: 99,
        wind_speed: 2.38,
        wind_deg: 9,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589886000,
        temp: 11.33,
        feels_like: 8.63,
        pressure: 1013,
        humidity: 52,
        dew_point: 1.84,
        clouds: 97,
        wind_speed: 1.43,
        wind_deg: 282,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589889600,
        temp: 11.15,
        feels_like: 8.7,
        pressure: 1013,
        humidity: 50,
        dew_point: 1.13,
        clouds: 94,
        wind_speed: 0.9,
        wind_deg: 334,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.11 },
      },
      {
        dt: 1589893200,
        temp: 10.09,
        feels_like: 5.93,
        pressure: 1013,
        humidity: 57,
        dew_point: 1.97,
        clouds: 79,
        wind_speed: 3.54,
        wind_deg: 63,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.31 },
      },
      {
        dt: 1589896800,
        temp: 9.15,
        feels_like: 4.52,
        pressure: 1013,
        humidity: 61,
        dew_point: 2.23,
        clouds: 84,
        wind_speed: 4.23,
        wind_deg: 83,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.25 },
      },
      {
        dt: 1589900400,
        temp: 8.99,
        feels_like: 5.28,
        pressure: 1014,
        humidity: 60,
        dew_point: 1.69,
        clouds: 83,
        wind_speed: 2.83,
        wind_deg: 95,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.12 },
      },
      {
        dt: 1589904000,
        temp: 8.91,
        feels_like: 5.35,
        pressure: 1014,
        humidity: 60,
        dew_point: 1.62,
        clouds: 79,
        wind_speed: 2.6,
        wind_deg: 111,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.11 },
      },
      {
        dt: 1589907600,
        temp: 8.36,
        feels_like: 4.95,
        pressure: 1014,
        humidity: 61,
        dew_point: 1.47,
        clouds: 80,
        wind_speed: 2.32,
        wind_deg: 129,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.11 },
      },
      {
        dt: 1589911200,
        temp: 7.81,
        feels_like: 4.74,
        pressure: 1015,
        humidity: 64,
        dew_point: 1.52,
        clouds: 70,
        wind_speed: 1.86,
        wind_deg: 160,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589914800,
        temp: 7.05,
        feels_like: 3.88,
        pressure: 1016,
        humidity: 66,
        dew_point: 1.27,
        clouds: 94,
        wind_speed: 1.94,
        wind_deg: 169,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589918400,
        temp: 5.71,
        feels_like: 2.43,
        pressure: 1016,
        humidity: 70,
        dew_point: 0.79,
        clouds: 70,
        wind_speed: 1.99,
        wind_deg: 218,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
      },
      {
        dt: 1589922000,
        temp: 5.54,
        feels_like: 1.62,
        pressure: 1017,
        humidity: 71,
        dew_point: 0.74,
        clouds: 72,
        wind_speed: 2.91,
        wind_deg: 244,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
      },
      {
        dt: 1589925600,
        temp: 5.14,
        feels_like: 1.4,
        pressure: 1017,
        humidity: 73,
        dew_point: 0.74,
        clouds: 58,
        wind_speed: 2.65,
        wind_deg: 255,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
      },
      {
        dt: 1589929200,
        temp: 5.17,
        feels_like: 1.21,
        pressure: 1018,
        humidity: 74,
        dew_point: 1.09,
        clouds: 66,
        wind_speed: 3.02,
        wind_deg: 270,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
      },
      {
        dt: 1589932800,
        temp: 4.71,
        feels_like: 0.94,
        pressure: 1018,
        humidity: 79,
        dew_point: 1.42,
        clouds: 60,
        wind_speed: 2.85,
        wind_deg: 282,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
      },
      {
        dt: 1589936400,
        temp: 4.5,
        feels_like: 0.77,
        pressure: 1018,
        humidity: 82,
        dew_point: 1.72,
        clouds: 0,
        wind_speed: 2.87,
        wind_deg: 298,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
      },
      {
        dt: 1589940000,
        temp: 4.4,
        feels_like: 0.61,
        pressure: 1018,
        humidity: 84,
        dew_point: 2.05,
        clouds: 0,
        wind_speed: 3.01,
        wind_deg: 309,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
      },
      {
        dt: 1589943600,
        temp: 4.62,
        feels_like: 0.87,
        pressure: 1019,
        humidity: 83,
        dew_point: 2,
        clouds: 0,
        wind_speed: 2.97,
        wind_deg: 314,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589947200,
        temp: 5.52,
        feels_like: 1.41,
        pressure: 1019,
        humidity: 75,
        dew_point: 1.55,
        clouds: 0,
        wind_speed: 3.35,
        wind_deg: 334,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589950800,
        temp: 6.27,
        feels_like: 2.02,
        pressure: 1020,
        humidity: 69,
        dew_point: 1.18,
        clouds: 0,
        wind_speed: 3.45,
        wind_deg: 343,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589954400,
        temp: 7.64,
        feels_like: 3.22,
        pressure: 1020,
        humidity: 64,
        dew_point: 1.43,
        clouds: 0,
        wind_speed: 3.75,
        wind_deg: 346,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589958000,
        temp: 8.84,
        feels_like: 4.17,
        pressure: 1021,
        humidity: 59,
        dew_point: 1.4,
        clouds: 0,
        wind_speed: 4.11,
        wind_deg: 347,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589961600,
        temp: 9.77,
        feels_like: 5.33,
        pressure: 1021,
        humidity: 55,
        dew_point: 1.25,
        clouds: 0,
        wind_speed: 3.76,
        wind_deg: 351,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589965200,
        temp: 10.56,
        feels_like: 6.76,
        pressure: 1021,
        humidity: 52,
        dew_point: 1.21,
        clouds: 0,
        wind_speed: 2.83,
        wind_deg: 4,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1589968800,
        temp: 10.86,
        feels_like: 7.3,
        pressure: 1022,
        humidity: 50,
        dew_point: 0.91,
        clouds: 1,
        wind_speed: 2.43,
        wind_deg: 48,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.13 },
      },
      {
        dt: 1589972400,
        temp: 9.67,
        feels_like: 6.15,
        pressure: 1022,
        humidity: 55,
        dew_point: 1.31,
        clouds: 21,
        wind_speed: 2.43,
        wind_deg: 82,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.13 },
      },
      {
        dt: 1589976000,
        temp: 9.97,
        feels_like: 7.11,
        pressure: 1022,
        humidity: 57,
        dew_point: 2.1,
        clouds: 34,
        wind_speed: 1.66,
        wind_deg: 84,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.14 },
      },
      {
        dt: 1589979600,
        temp: 9.75,
        feels_like: 6.93,
        pressure: 1022,
        humidity: 61,
        dew_point: 2.7,
        clouds: 97,
        wind_speed: 1.78,
        wind_deg: 128,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.26 },
      },
      {
        dt: 1589983200,
        temp: 9.39,
        feels_like: 6.6,
        pressure: 1022,
        humidity: 65,
        dew_point: 3.29,
        clouds: 87,
        wind_speed: 1.88,
        wind_deg: 135,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.36 },
      },
      {
        dt: 1589986800,
        temp: 8.89,
        feels_like: 5.75,
        pressure: 1022,
        humidity: 67,
        dew_point: 3.24,
        clouds: 86,
        wind_speed: 2.37,
        wind_deg: 122,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        rain: { "1h": 0.25 },
      },
      {
        dt: 1589990400,
        temp: 8.6,
        feels_like: 5.33,
        pressure: 1023,
        humidity: 68,
        dew_point: 3.16,
        clouds: 76,
        wind_speed: 2.54,
        wind_deg: 129,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589994000,
        temp: 7.98,
        feels_like: 4.77,
        pressure: 1023,
        humidity: 69,
        dew_point: 2.83,
        clouds: 61,
        wind_speed: 2.35,
        wind_deg: 135,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1589997600,
        temp: 7.11,
        feels_like: 3.92,
        pressure: 1023,
        humidity: 72,
        dew_point: 2.54,
        clouds: 51,
        wind_speed: 2.26,
        wind_deg: 145,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      {
        dt: 1590001200,
        temp: 5.56,
        feels_like: 2.75,
        pressure: 1024,
        humidity: 78,
        dew_point: 2.1,
        clouds: 0,
        wind_speed: 1.63,
        wind_deg: 155,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590004800,
        temp: 4.61,
        feels_like: 2.27,
        pressure: 1024,
        humidity: 81,
        dew_point: 1.72,
        clouds: 2,
        wind_speed: 0.86,
        wind_deg: 174,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
      },
      {
        dt: 1590008400,
        temp: 4.89,
        feels_like: 2.36,
        pressure: 1024,
        humidity: 79,
        dew_point: 1.73,
        clouds: 26,
        wind_speed: 1.12,
        wind_deg: 239,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
      },
      {
        dt: 1590012000,
        temp: 4.73,
        feels_like: 1.71,
        pressure: 1025,
        humidity: 79,
        dew_point: 1.51,
        clouds: 31,
        wind_speed: 1.78,
        wind_deg: 263,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
      },
      {
        dt: 1590015600,
        temp: 4.44,
        feels_like: 1.15,
        pressure: 1025,
        humidity: 81,
        dew_point: 1.51,
        clouds: 25,
        wind_speed: 2.18,
        wind_deg: 284,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
      },
      {
        dt: 1590019200,
        temp: 4.28,
        feels_like: 1,
        pressure: 1025,
        humidity: 82,
        dew_point: 1.6,
        clouds: 21,
        wind_speed: 2.18,
        wind_deg: 304,
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
      },
      {
        dt: 1590022800,
        temp: 4.15,
        feels_like: 0.74,
        pressure: 1025,
        humidity: 83,
        dew_point: 1.61,
        clouds: 0,
        wind_speed: 2.37,
        wind_deg: 314,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
      },
      {
        dt: 1590026400,
        temp: 4.04,
        feels_like: 0.7,
        pressure: 1025,
        humidity: 83,
        dew_point: 1.42,
        clouds: 0,
        wind_speed: 2.24,
        wind_deg: 313,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
        ],
      },
      {
        dt: 1590030000,
        temp: 4.32,
        feels_like: 1.18,
        pressure: 1025,
        humidity: 81,
        dew_point: 1.42,
        clouds: 0,
        wind_speed: 1.94,
        wind_deg: 321,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590033600,
        temp: 5.79,
        feels_like: 2.72,
        pressure: 1025,
        humidity: 75,
        dew_point: 1.85,
        clouds: 0,
        wind_speed: 1.93,
        wind_deg: 322,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590037200,
        temp: 7.41,
        feels_like: 4.3,
        pressure: 1026,
        humidity: 67,
        dew_point: 1.77,
        clouds: 0,
        wind_speed: 1.98,
        wind_deg: 328,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590040800,
        temp: 8.86,
        feels_like: 5.59,
        pressure: 1026,
        humidity: 59,
        dew_point: 1.31,
        clouds: 0,
        wind_speed: 2.12,
        wind_deg: 333,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590044400,
        temp: 10.32,
        feels_like: 6.74,
        pressure: 1026,
        humidity: 50,
        dew_point: 0.44,
        clouds: 0,
        wind_speed: 2.35,
        wind_deg: 338,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
      {
        dt: 1590048000,
        temp: 11.14,
        feels_like: 7.46,
        pressure: 1026,
        humidity: 46,
        dew_point: 0.09,
        clouds: 0,
        wind_speed: 2.41,
        wind_deg: 344,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
      },
    ],
    daily: [
      {
        dt: 1589882400,
        sunrise: 1589853933,
        sunset: 1589916130,
        temp: {
          day: 11.61,
          min: 5.59,
          max: 11.61,
          night: 5.59,
          eve: 9.56,
          morn: 11.61,
        },
        feels_like: { day: 7.44, night: 1.68, eve: 5.94, morn: 7.44 },
        pressure: 1011,
        humidity: 62,
        dew_point: 4.58,
        wind_speed: 4.23,
        wind_deg: 23,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: 99,
        rain: 1.25,
        uvi: 4.07,
      },
      {
        dt: 1589968800,
        sunrise: 1589940212,
        sunset: 1590002659,
        temp: {
          day: 10.56,
          min: 4.62,
          max: 10.56,
          night: 4.89,
          eve: 8.89,
          morn: 4.62,
        },
        feels_like: { day: 6.76, night: 2.36, eve: 5.75, morn: 0.87 },
        pressure: 1021,
        humidity: 52,
        dew_point: 1.21,
        wind_speed: 2.83,
        wind_deg: 4,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: 0,
        rain: 1.27,
        uvi: 3.95,
      },
      {
        dt: 1590055200,
        sunrise: 1590026494,
        sunset: 1590089187,
        temp: {
          day: 11.96,
          min: 4.32,
          max: 11.96,
          night: 5.75,
          eve: 10.77,
          morn: 4.32,
        },
        feels_like: { day: 8.48, night: 2.09, eve: 7.12, morn: 1.18 },
        pressure: 1026,
        humidity: 44,
        dew_point: 0.3,
        wind_speed: 2.16,
        wind_deg: 348,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: 1,
        uvi: 4.19,
      },
      {
        dt: 1590141600,
        sunrise: 1590112778,
        sunset: 1590175712,
        temp: {
          day: 12.15,
          min: 3.79,
          max: 12.15,
          night: 6.61,
          eve: 11.37,
          morn: 3.79,
        },
        feels_like: { day: 8.56, night: 2.36, eve: 6.61, morn: 0.02 },
        pressure: 1029,
        humidity: 43,
        dew_point: -0.09,
        wind_speed: 2.28,
        wind_deg: 91,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: 0,
        uvi: 4.25,
      },
      {
        dt: 1590228000,
        sunrise: 1590199065,
        sunset: 1590262236,
        temp: {
          day: 12.76,
          min: 7.77,
          max: 13.12,
          night: 8.17,
          eve: 11.71,
          morn: 7.77,
        },
        feels_like: { day: 7.2, night: 4.03, eve: 4.57, morn: 3.3 },
        pressure: 1024,
        humidity: 56,
        dew_point: 4.26,
        wind_speed: 6.11,
        wind_deg: 183,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: 100,
        rain: 1.78,
        uvi: 4.16,
      },
      {
        dt: 1590314400,
        sunrise: 1590285355,
        sunset: 1590348757,
        temp: {
          day: 14.44,
          min: 7.17,
          max: 17.85,
          night: 11.77,
          eve: 17.85,
          morn: 7.17,
        },
        feels_like: { day: 9.2, night: 7.11, eve: 11.51, morn: 2.54 },
        pressure: 1018,
        humidity: 52,
        dew_point: 4.75,
        wind_speed: 5.8,
        wind_deg: 279,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: 0,
        uvi: 4.2,
      },
      {
        dt: 1590400800,
        sunrise: 1590371648,
        sunset: 1590435277,
        temp: {
          day: 16.51,
          min: 9.87,
          max: 18.85,
          night: 11.26,
          eve: 18.18,
          morn: 9.87,
        },
        feels_like: { day: 9.68, night: 7.32, eve: 10.95, morn: 5.14 },
        pressure: 1016,
        humidity: 55,
        dew_point: 7.67,
        wind_speed: 8.9,
        wind_deg: 274,
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        clouds: 0,
        uvi: 4.43,
      },
      {
        dt: 1590487200,
        sunrise: 1590457944,
        sunset: 1590521794,
        temp: {
          day: 15.9,
          min: 8.72,
          max: 18.74,
          night: 12.96,
          eve: 18.74,
          morn: 8.72,
        },
        feels_like: { day: 12.67, night: 8.82, eve: 13.54, morn: 6.52 },
        pressure: 1022,
        humidity: 50,
        dew_point: 5.77,
        wind_speed: 3.15,
        wind_deg: 217,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 97,
        uvi: 4.36,
      },
    ],
  };

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

    /*    latitude = 51.509865;
    longitude = -0.118092; */

    console.log("Found coordinates: ", latitude, longitude);

    const endpoint1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const currentWeather = await request(endpoint1);
    console.log(currentWeather);

    const endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&units=metric&appid=${apiKey}`;
    const weatherForecast = await request(endpoint2);
    console.log(weatherForecast);

    /* const currentWeather = weatherPlaceholder;
    const weatherForecast = forecastPlaceholder; */
    console.log(currentWeather);
    console.log(weatherForecast);

    renderWeatherInfo(currentWeather, weatherForecast);
  };

  const renderWeatherInfo = (currentWeather, weatherForecast) => {
    const currentSection = document.querySelector("#currentWeather");
    const hourlySection = document.querySelector("#hourlyForecast");
    const dailySection = document.querySelector("#dailyForecast");

    // ${}
    const currentContent = `
                          <img src="http://openweathermap.org/img/wn/${
                            currentWeather.weather[0].icon
                          }@2x.png" alt="Weather icon">
                          <p>${currentWeather.name}</p>
                          <p>${currentWeather.main.temp}&deg;C</p>
                          <p>${currentWeather.main.feels_like}&deg;C</p>
                          <p>${unixToHours(
                            currentWeather.timezone + currentWeather.dt
                          )}</p>
                          `;

    currentSection.innerHTML = currentContent;

    console.log(currentWeather.weather[0].icon);
    console.log(currentWeather.name);
    console.log(currentWeather.main.temp);

    console.log(weatherForecast.hourly[0].dt);

    const hours = weatherForecast.hourly
      .map((hour) => {
        return `<th>${unixToHours(
          weatherForecast.timezone_offset + hour.dt
        )}</th>`;
      })
      .join("");
    //description
    const weatherIcons = weatherForecast.hourly
      .map((hour) => {
        return `<td><img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}.png" alt="Weather icon: ${hour.weather[0].description}"></td>`;
      })
      .join("");

    const temps = weatherForecast.hourly
      .map((hour) => {
        return `<td>${hour.temp}&deg;</td>`;
      })
      .join("");

    let hourlyTable = `<table>
                        <tr>${hours}</tr>
                        <tr>${weatherIcons}</tr>
                        <tr>${temps}</tr>
                      </table>`;

    hourlySection.innerHTML = hourlyTable;

    const days = weatherForecast.daily
      .slice(1)
      .map((day) => {
        const weekday =
          weekdays[unixToDay(weatherForecast.timezone_offset + day.dt)];

        return `<tr>
        <td>${weekday}</td>
        <td><img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="Weather icon: ${day.weather[0].description}"></td>
        <td>${day.temp.min}</td>
        <td>${day.temp.max}</td>
      </tr>`;
      })
      .join("");

    const dailyTable = `<table>${days}</table>`;
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

    /* console.log(suggestions[0].title); */

    const listitems = suggestions
      .map((suggestion) => {
        return `<li class="suggestion-listitem" data-lat="${suggestion.position.lat}" data-long="${suggestion.position.lng}">${suggestion.title}</li>`;
      })
      .join("");

    const suggestionList = document.querySelector("#suggestionList");
    suggestionList.innerHTML = listitems;

    document.querySelectorAll(".suggestion-listitem").forEach((listitem) => {
      listitem.addEventListener("click", getSearchedWeather);
    });
  };
  const getSearchedWeather = async (e) => {
    console.log("hej från getSearchedWeather");
    /*  const latitude =  */
    console.log(e.currentTarget.dataset.lat);
    console.log(e.currentTarget.dataset.long);
    const latitude = e.currentTarget.dataset.lat;
    const longitude = e.currentTarget.dataset.long;
    const apiKey = await getKeys().then((json) => {
      return json.weather_key;
    });

    const endpoint1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    const currentWeather = await request(endpoint1);
    console.log(currentWeather);

    const endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&units=metric&appid=${apiKey}`;
    const weatherForecast = await request(endpoint2);
    console.log(weatherForecast);

    renderWeatherInfo(currentWeather, weatherForecast);
  };

  document
    .querySelector("#searchInput")
    .addEventListener("change", autoComplete);
  document
    .querySelector("#searchInput")
    .addEventListener("keyup", autoComplete);
})();
