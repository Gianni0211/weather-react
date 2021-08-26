export const capitaliseString = (string) => {
  let res = string.split(" ");
  res = res.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  return res.join(" ");
};

export const createHighlightsData = (data) => {
  let sunData = {
    title: "Sunrise & Sunset",
    data: { sunRise: data.city.sunrise, sunSet: data.city.sunset },
  };
  let wind = {
    title: "Wind Status",
    data: data.list[0].wind,
  };
  let visibility = {
    title: "Visibility",
    data: data.list[0].visibility,
  };
  let mainData = data.list[0].main;
  let seaLevel = {
    title: "Sea Level",
    data: mainData.sea_level,
  };
  let humidity = {
    title: "Humidity",
    data: data.list[0].humidity,
  };
  let pressure = {
    title: "Pressure",
    data: data.list[0].pressure,
  };
  return [sunData, wind, visibility, seaLevel, humidity, pressure];
};
