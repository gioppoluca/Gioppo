Hooks.once("init", () => {
  console.log("Hello Gioppo Compendium!");
});

Hooks.once("setup", () => {
  if (CONFIG.DND5E) {
    CONFIG.DND5E.featureTypes.class.subtypes.occults = "Occults";
    console.log("Added featureTypes");
  }
});