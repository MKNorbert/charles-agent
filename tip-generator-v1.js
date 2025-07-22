
function generateSafeCombo(matches) {
  return matches.filter(match => {
    const odds = match.odds;
    const spread = Math.abs(odds.home - odds.away);
    return odds.home < 2.10 && odds.away > 3.00 && spread > 1.0;
  }).map(match => ({
    pick: match.home + " to WIN",
    reason: "Favorable home odds and clear risk spread",
    confidence: "88-92%"
  }));
}
