const names = transformers.map(function (transformer) {
      return transformer.name;
});
console.log(names);

const autobots = transformers.filter(function (transformer) {
    return transformer.team === "Autobot";
});
console.log(autobots);

const vehicle = transformers.filter(function (transformer) {
    return transformer.form_type === "vehicle";
});