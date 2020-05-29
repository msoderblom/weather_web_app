<?php
/*
This is a sample file for an API that provides API-keys to the JS-file. 
Get your own keys from the links below and paste them where it says "YOUR KEY FROM: ...". 
Rename this file "api_keys.php" and i should work. 
*/

header("Content-Type: application/json; charset=UTF-8");

define("WEATHER_KEY", "YOUR KEY FROM: https://openweathermap.org/api");
define("HERE_KEY", "YOUR KEY FROM: https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-autosuggest-brief.html");


$key = [
  "weather_key" => WEATHER_KEY,
  "here_key" => HERE_KEY,
];

$json = json_encode($key, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

echo $json;