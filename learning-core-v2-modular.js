
function activateModule(moduleName, context) {
  const module = taughtModules.find(m => m.name === moduleName);
  if (!module) return "❌ Modul nem található";

  const triggerMatch = module.activatesOn.some(trigger =>
    context.includes(trigger)
  );

  if (triggerMatch) {
    console.log("✅ Modul aktiválva:", moduleName);
    return "✅ " + moduleName + " aktiválva – " + module.purpose;
  } else {
    return "ℹ️ " + moduleName + " nem aktiválódott ebben a környezetben.";
  }
}
