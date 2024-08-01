// src/App.js

import React, { useState } from 'react';

// Questions grouped by level
const questionsByLevel = {
  1: [
    {
      text: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2,
    },
    {
      text: "What is square root of 144?",
      options: ["11", "12", "13", "14"],
      answer: 1,
    },
    {
      text: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3,
    },
    {
      text: "What color do you usually associate with the sky on a clear day?",
      options: ["Green", "Blue", "Red", "Yellow"],
      answer: 1,
    },
    {
      text: "What is the chemical formula for water (H2O)?",
      options: ["Oxygen", "Water", "Hydrogen", "Hydrogen Peroxide"],
      answer: 1,
    },
  ],
  2: [
    {
      text: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
      answer: 1,
    },
    {
      Oganessontext: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: 0,
    },
    {
      text: "Which river is often considered the longest in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      answer: 1,
    },
    {
      text: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1920"],
      answer: 1,
    },
    {
      text: "Who holds the world record for javelin throw?",
      options: ["Tiger Woods", "Lance Armstrong", "Jan Zelezny", "Michael Phelps"],
      answer: 2,
    },
  ],
  3: [
    {
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1,
    },
    {
      text: "What is the capital city of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      answer: 2,
    },
    {
      text: "At what temperature does water boil at sea level?",
      options: ["50°C", "75°C", "100°C", "125°C"],
      answer: 2,
    },
    {
      text: "What element is represented by the letter 'O' in the periodic table?",
      options: ["Gold", "Osmium", "Oxygen", "Oganesson"],
      answer: 2,
    },
    {
      text: "What is the largest animal species on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      answer: 1,
    },
  ],
  4: [
    {
      text: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: 2,
    },
    {
      text: "Which planet is the smallest in our solar system?",
      options: ["Earth", "Mars", "Mercury", "Venus"],
      answer: 2,
    },
    {
      text: "In which part of the body is the hippocampus located?",
      options: ["Heart", "Liver", "Brain", "Lung"],
      answer: 2,
    },
    {
      text: "What is the primary ingredient in guacamole?",
      options: ["Tomato", "Onion", "Avocado", "Pepper"],
      answer: 2,
    },
    {
      text: "Which element has the symbol 'Na'?",
      options: ["Nitrogen", "Argon", "Sodium", "Neon"],
      answer: 2,
    },
  ],
  5: [
    {
      text: "Which artist is famous for painting the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: 2,
    },
    {
      text: "What gas do plants primarily consume during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 2,
    },
    {
      text: "What is the largest landmass on Earth?",
      options: ["Africa", "Asia", "North America", "South America"],
      answer: 1,
    },
    {
      text: "What musical instrument is known for having 88 keys?",
      options: ["Guitar", "Violin", "Piano", "Flute"],
      answer: 2,
    },
    {
      text: "In a right triangle, what is the longest side called?",
      options: ["Hypotenuse", "Altitude", "Base", "Leg"],
      answer: 0,
    },
  ],
  6: [
    {
      text: "Who is regarded as the father of modern physics?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
      answer: 1,
    },
    {
      text: "At what temperature does water freeze?",
      options: ["0°C", "32°F", "100°F", "32°C"],
      answer: 0,
    },
    {
      text: "Which country is famously associated with kangaroos?",
      options: ["India", "Australia", "Brazil", "South Africa"],
      answer: 1,
    },
    {
      text: "In what year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      answer: 2,
    },
    {
      text: "What is the chemical formula for sodium chloride (table salt)?",
      options: ["NaCl", "KCl", "CaCl", "LiCl"],
      answer: 0,
    },
  ],
  7: [
    {
      text: "Which language is predominantly spoken in Brazil?",
      options: ["Spanish", "Portuguese", "English", "French"],
      answer: 1,
    },
    {
      text: "What is the name of the smallest bone in the human body?",
      options: ["Femur", "Stapes", "Tibia", "Fibula"],
      answer: 1,
    },
    {
      text: "What is the capital city of Italy?",
      options: ["Rome", "Milan", "Venice", "Florence"],
      answer: 0,
    },
    {
      text: "Who was the first human to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
      answer: 1,
    },
    {
      text: "Which planet in our solar system is known for its prominent rings?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 3,
    },
  ],
  8: [
    {
      text: "What is the hardest known natural mineral?",
      options: ["Quartz", "Diamond", "Emerald", "Topaz"],
      answer: 1,
    },
    {
      text: "In which year did World War II come to an end?",
      options: ["1944", "1945", "1946", "1947"],
      answer: 1,
    },
    {
      text: "Which scientist is famous for proposing the theory of evolution?",
      options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
      answer: 1,
    },
    {
      text: "What is the largest island on Earth?",
      options: ["New Guinea", "Borneo", "Greenland", "Madagascar"],
      answer: 2,
    },
    {
      text: "Which country is often referred to as the Land of the Rising Sun?",
      options: ["China", "Japan", "Korea", "Thailand"],
      answer: 1,
    },
  ],
  9: [
    {
      text: "Who is the author of the 'Iliad'?",
      options: ["Homer", "Virgil", "Socrates", "Plato"],
      answer: 0,
    },
    {
      text: "What type of currency is used in the United Kingdom?",
      options: ["Dollar", "Euro", "Pound", "Yen"],
      answer: 2,
    },
    {
      text: "What is the primary gas present in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 1,
    },
    {
      text: "Which iconic structure was constructed during the Mughal Empire?",
      options: ["Taj Mahal", "Great Wall", "Colosseum", "Eiffel Tower"],
      answer: 0,
    },
    {
      text: "Which colors are found in the flag of Norway?",
      options: ["Red, white, and blue", "Yellow and blue", "Red and white", "Blue and white"],
      answer: 0,
    },
  ],
  10: [
    {
      text: "Where can the Great Pyramid of Giza be found?",
      options: ["Iraq", "Egypt", "Greece", "Peru"],
      answer: 1,
    },
    {
      text: "What was the first artificial satellite sent into space?",
      options: ["Apollo 11", "Sputnik", "Vostok", "Explorer 1"],
      answer: 1,
    },
    {
      text: "Which vitamin is commonly referred to as the sunshine vitamin?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: 3,
    },
    {
      text: "What is the capital city of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: 1,
    },
    {
      text: "Which animal is often referred to as the King of the Jungle?",
      options: ["Tiger", "Elephant", "Lion", "Cheetah"],
      answer: 2,
    },
  ],
  11: [
    {
      text: "What year was the first manned space flight accomplished?",
      options: ["1949", "1957", "1961", "1969"],
      answer: 2,
    },
    {
      text: "Which language is known to be the most widely spoken in the world by total number of speakers (including second-language speakers)?",
      options: ["English", "Mandarin", "Spanish", "Hindi"],
      answer: 0,
    },
    {
      text: "What is the capital city of Greece?",
      options: ["Athens", "Rome", "Cairo", "Istanbul"],
      answer: 0,
    },
    {
      text: "How many continents are recognized in the world?",
      options: ["5", "6", "7", "8"],
      answer: 2,
    },
    {
      text: "Which mammal is capable of true flight?",
      options: ["Bat", "Bird", "Flying Squirrel", "Sugar Glider"],
      answer: 0,
    },
  ],
  12: [
    {
      text: "What is the capital of Myanmar?",
      options: ["Yangon", "Naypyidaw", "Bangkok", "Hanoi"],
      answer: 1,
    },
    {
      text: "Which nation is known for its production of maple syrup?",
      options: ["Sweden", "Canada", "United States", "Finland"],
      answer: 1,
    },
    {
      text: "What is recognized as the world's smallest country?",
      options: ["Monaco", "Vatican City", "San Marino", "Nauru"],
      answer: 1,
    },
    {
      text: "Who is known for his explorations to the Americas?",
      options: ["Marco Polo", "Ferdinand Magellan", "Christopher Columbus", "James Cook"],
      answer: 2,
    },
    {
      text: "Which element has the atomic number 1?",
      options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
      answer: 1,
    },
  ],
  13: [
    {
      text: "Who is credited with the invention of the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Henry Ford"],
      answer: 1,
    },
    {
      text: "What is the largest desert in the world?",
      options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
      answer: 3,
    },
    {
      text: "What is the capital city of Sweden?",
      options: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
      answer: 0,
    },
    {
      text: "Which continent is home to the Amazon Rainforest?",
      options: ["Africa", "Asia", "Australia", "South America"],
      answer: 3,
    },
    {
      text: "What is the currency used in Japan?",
      options: ["Yen", "Yuan", "Dollar", "Euro"],
      answer: 0,
    },
  ],
  14: [
    {
      text: "Who was the physicist responsible for the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Richard Feynman"],
      answer: 1,
    },
    {
      text: "Who was the first man in space?",
      options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Louis Armstrong"],
      answer: 1,
    },
    {
      text: "Which nation gave the Statue of Liberty to the United States?",
      options: ["France", "Italy", "Germany", "Spain"],
      answer: 0,
    },
    {
      text: "What is the chemical formula for water?",
      options: ["HO", "H2O", "O2", "H2"],
      answer: 1,
    },
    {
      text: "What is the closest planet to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      answer: 2,
    },
  ],
  15: [
    {
      text: "In Greek mythology, who is the deity of the sea?",
      options: ["Zeus", "Hades", "Poseidon", "Apollo"],
      answer: 2,
    },
    {
      text: "On which continent can you find the Sahara Desert?",
      options: ["Asia", "North America", "Africa", "Australia"],
      answer: 2,
    },
    {
      text: "What is the longest river found in Europe?",
      options: ["Volga", "Danube", "Rhine", "Seine"],
      answer: 0,
    },
    {
      text: "What is the capital of South Korea?",
      options: ["Seoul", "Beijing", "Tokyo", "Hanoi"],
      answer: 0,
    },
    {
      text: "Which of these boxers was undefeated in their career?",
      options: ["Mike Tyson", "Muhammad Ali", "Rocky Marciano", "Joe Frazier"],
      answer: 2,
    },
  ],
};


const App = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const prizeAmounts = {
    1: 100,
    2: 200,
    3: 300,
    4: 500,
    5: 1000,
    6: 2000,
    7: 4000,
    8: 8000,
    9: 16000,
    10: 32000,
    11: 64000,
    12: 125000,
    13: 250000,
    14: 500000,
    15: 1000000,
  };

  const getRandomQuestion = () => {
    const questions = questionsByLevel[currentLevel];
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const startGame = () => {
    setCurrentLevel(1);
    setScore(0);
    setGameOver(false);
    setCurrentQuestion(getRandomQuestion());
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    } else {
      setGameOver(true);
      return;
    }

    // Move to the next level if questions are available
    if (questionsByLevel[currentLevel + 1]) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(getRandomQuestion());
    } else {
      setGameOver(true); // End game when there are no more levels
    }
  };

  const restartGame = () => {
    startGame();
  };

  const calculatePrize = () => {
    if (score === 15) {
      return "Congratulations, Champion! You have conquered the game and become a millionaire! You’ve won an incredible one million euros! Your knowledge and determination have paid off—great work!"
    } else if (score > 0) {
      return `Congratulations, you have won ${prizeAmounts[score]} euros!`;
    } else {
      return "You didn't win any money. Better luck next time!";
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Who Wants to Be a Millionaire?</h1>
      {gameOver ? (
        <div>
          <h2>Your score: {score}/{Object.keys(questionsByLevel).length * 5}</h2>
          <h3>{calculatePrize()}</h3>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        currentQuestion && (
          <div>
            <h2>{currentQuestion.text}</h2>
            {currentQuestion.options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswer(index)} 
                style={{ display: 'block', margin: '10px 0' }}>
                {option}
              </button>
            ))}
          </div>
        )
      )}
      {!gameOver && !currentQuestion && <button onClick={startGame}>Start Game</button>}
    </div>
  );
};

export default App;
