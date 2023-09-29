const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;

  const changeScoreBy = (points) => {
    privateScore += points;
  };

  return {
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: () => {
      changeScoreBy(1);
    },
    penalizeStudent: () => {
      changeScoreBy(-1);
    },
    getScore: () => {
      return `${name}: ${privateScore}`;
    }
  };
};

// Create an instance of studentHogwarts for Harry
const harry = studentHogwarts();
harry.setName("Harry");

// Reward the student four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log the name and score
console.log(harry.getScore());

// Create an instance of studentHogwarts for Draco
const draco = studentHogwarts();
draco.setName("Draco");

// Reward the student one time and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log the name and score
console.log(draco.getScore());
