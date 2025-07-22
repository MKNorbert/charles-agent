function evaluateContext(match) {
  if (match.type === "Club Friendly" || match.lineup === "Rotated" || match.odds_alert) {
    return "⚠️ Risk Detected – Avoid in SAFE COMBO";
  }
  return "✅ Suitable for SAFE COMBO";
}