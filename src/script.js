"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10 + 1);
const chooseOption = (opt1, opt2) => {
  // Math.floor(Math.random() * (max - min + 1)) + min
  let randNum = Math.floor(Math.random() * 2) + 0;
  return randNum === 0 ? opt1 : opt2;
};
function attackPlayer(health) {
  return health - randomDamage();
}
const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);
const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

// fight("Teddy", "Autumn", 100, 100);

// Extended Challenge
const getGrade = (num) => {
  switch (true) {
    case num >= 90:
      console.log("A");
      break;
    case num >= 80:
      console.log("B");
      break;
    case num >= 70:
      console.log("C");
      break;
    case num >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
};
getGrade(99);
getGrade(88);
getGrade(77);
getGrade(66);
getGrade(55);

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (important) {
    return 2;
  } else if (urgent) {
    return 3;
  } else {
    return 4;
  }
};

const calculatePay = (wage, hours) => {
  let paycheck = 40 * wage;
  if (hours <= 40) return paycheck;
  const overTimeWage = wage * 1.5;
  const extra = hours - 40;
  paycheck += extra * overTimeWage;
  return paycheck;
};
