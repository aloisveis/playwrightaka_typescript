const cityArray: string[] = [
  "České Budějovice",
  "Písek",
  "Tábor",
  "Jindřichův Hradec",
  "Vodňany",
];

cityArray.forEach((city) => {
  console.log(city);
  if (city == "Tábor") {
    console.log(
      "Tábor byl založen v roce 1402 Husity, pojmenován podle hory Tabor v Nazarethu",
    );
  }
});
