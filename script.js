const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput
    }
    else {
      console.log('There has been an error with what you typed in.')
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
      return 'paper';
      case 2: 
      return 'scissors'
      case 3:
      return 'rock';
    }
  }
  
  const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
      return 'This game is a tie!';
    }
    if (getUserChoice === 'rock') {
      if (getComputerChoice === 'paper') {
          return 'Sorry, computer won!';
        } 
        else {
          return 'Congratulation, you won!';
        }
     }
  
     if(getUserChoice === 'paper') {
       if (getComputerChoice === 'scissors'){
            return 'Sorry, computer won!'}
     } else {
       return 'Congratulations, you won!'
     }
  
     if (getUserChoice === 'scissors') {
       if (userComputerChoice === 'rock') {
         return 'Sorry, computer won!'
       }
       else {
         return 'Congratulations, you won!'
       }
     }
  }
  
  console.log(determineWinner('rock', 'scissors'));
  console.log(determineWinner('paper', 'scissors'));
  
  
  
  
  