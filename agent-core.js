
// CharlesAgent – Learning Core v1
let agentMemory = [];
function learnFromFailure(match, reason) {
    agentMemory.push({ match, reason, timestamp: new Date().toISOString() });
    console.log("Learning recorded:", match, reason);
}
function suggestAction() {
    return "Review last 5 losses and apply Auto-Replace if pattern matches.";
}
