import Question from "./Question.jsx";
import questions from "./questions.js";
import Progress from './Progress.jsx'
import { useState } from "react";
let i = 0;
export default function Quiz() {
  const [question, setQuestion] = useState(questions[i]);
  const [finish, setFinish] = useState(false);
  const [resetProgress, setResetProgress] = useState(false);

  function checkAnswer() {
    if (i < questions.length) {
      i += 1;
      setQuestion(questions[i]);
      setResetProgress(true); 
      setTimeout(() => setResetProgress(false), 0)
    } else {
      setFinish(true);
    }
  }
  return (
    <main>
      <div id="quiz">
        <div id="question">
          {i>6 ? (
              <div>Questions finished</div>
          ) : (
            <>
            <Progress reset={resetProgress} duration={10000} checkAnswer={checkAnswer} />
            <Question question={question} checkAnswer={checkAnswer} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
