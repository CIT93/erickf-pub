const FORM = document.getElementById("form");

const startExercise = (moveType, amountRep, restTime) => {
  return new Promise((resolve) => {
    const output = document.getElementById("output");
    const message = document.createElement("p");
    message.textContent = `Begin the Exercise: ${moveType}. Your amount of reps to complete is ${amountRep}, in this amount of time: ${restTime} minute`;
    output.appendChild(message);
    setTimeout(() => {
      const stopMessage = document.createElement("p");
      stopMessage.textContent = `Stop ${moveType}`;
      output.appendChild(stopMessage);
      resolve();
    }, restTime * 60000);
  });
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const moveType = FORM.moveType.value;
  const amountRep = FORM.amountRep.value;
  const restTime = FORM.restTime.value;
  startExercise(moveType, amountRep, restTime)
    .then(() => console.log("Exercise Finished!"))
    .catch((error) => console.error("ERROR 404"));
  FORM.reset();
});
