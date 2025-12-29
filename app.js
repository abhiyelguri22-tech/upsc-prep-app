import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const today = new Date().toISOString().slice(0, 10);

const task = {
  subject: "Geography",
  topic: "Plate Tectonics",
  source: "Savindra Singh Ch 5"
};

document.getElementById("task").innerText =
  `${task.subject} – ${task.topic} (${task.source})`;

window.markComplete = async () => {
  await setDoc(doc(db, "dailyLog", today), {
    ...task,
    status: "completed",
    date: today
  });
  document.getElementById("status").innerText = "Marked Completed";
};

window.markMissed = async () => {
  await setDoc(doc(db, "dailyLog", today), {
    ...task,
    status: "missed",
    date: today
  });
  document.getElementById("status").innerText = "Marked Missed";
};
