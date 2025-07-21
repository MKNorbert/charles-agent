
// CharlesAgent Learning Core v2
let memoryLog = [];
let matchHistory = [];

function recordLoss(matchId, reason) {
  memoryLog.push({ matchId, reason, timestamp: new Date().toISOString() });
  console.warn("❌ LOSS recorded:", matchId, reason);
}

function analyzePatterns() {
  const reasons = memoryLog.map(entry => entry.reason);
  const recurring = reasons.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(recurring).filter(([_, count]) => count > 1);
}

function learnSuggestion() {
  const patterns = analyzePatterns();
  if (patterns.length > 0) {
    return `⚠️ Pattern detected: ${patterns[0][0]} – recommend module adjustment.`;
  }
  return "✅ No repeated loss patterns – keep strategy.";
}
