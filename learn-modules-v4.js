
const taughtModules = [
  {
    name: "Trap Guard",
    category: "Core",
    purpose: "Szűri a barátságos, motiváció nélküli vagy kockázatos meccseket",
    activatesOn: ["Friendly", "Low Motivation", "Rotated Squad"],
    linkedWith: ["Motivation Sync", "Zero Margin Tolerance"]
  },
  {
    name: "ROI Memory",
    category: "Memory",
    purpose: "Korábbi tipp eredmények alapján tanul és újrasúlyoz",
    activatesOn: ["Pattern Detected", "High ROI"],
    linkedWith: ["Auto-Replace"]
  },
  {
    name: "Mass Confidence Alignment",
    category: "Meta",
    purpose: "Különböző AI források egyezését vizsgálja",
    activatesOn: ["Forebet=KickForm=Predictology"],
    linkedWith: ["AI Consensus"]
  }
];
