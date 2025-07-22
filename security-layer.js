function enforceSecurity(modules) {
  const blocked = modules.filter(m => m.category === "Meta" && m.status === "blocked");
  if (blocked.length > 0) {
    console.warn("Security Layer Blocked: ", blocked.map(b => b.name));
    return false;
  }
  return true;
}