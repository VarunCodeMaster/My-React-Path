// Topic: Lifiting State, useState
// Level: Intermediate
// Problem: Quiz Navigator - Challenge

import { useState } from "react";

function QuizNavigator() {
  document.title = "Quiz Navigator"

  const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "What is the color of the sky?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if(currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  }

  return(
    <div>
      <h1>Quiz Navigator</h1>
      <Question text={questions[currentIndex]} />
      <PrevButton onClick={handlePrev} disabled={currentIndex === 0} />
      <NextButton onClick={handleNext} disabled={currentIndex === questions.length - 1} />

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>
    </div>
  )
}

function Question({text}){
  return <h2>{text}</h2>
}

function PrevButton({onClick, disabled}){
  return(
    <button onClick={onClick} disabled={disabled}>
      Prev
    </button>
  )
}

function NextButton({onClick, disabled}){
  return(
    <button onClick={onClick} disabled={disabled}>
      Next
    </button>
  )
}

export default QuizNavigator