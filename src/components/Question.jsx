export default function Question({ question, checkAnswer }) {
  return (
    <>
      <h2>{question.text}</h2>

      <ul id="answers">
        <li className="answer">
          <button
            onClick={() => {
              checkAnswer(0);
            }}
          >
            {question.answers[0]}
          </button>
        </li>
        <li className="answer">
          <button
            onClick={() => {
              checkAnswer(1);
            }}
          >
            {question.answers[1]}
          </button>
        </li>
        <li className="answer">
          <button
            onClick={() => {
              checkAnswer(2);
            }}
          >
            {question.answers[2]}
          </button>
        </li>
        <li className="answer">
          <button
            onClick={() => {
              checkAnswer(3);
            }}
          >
            {question.answers[3]}
          </button>
        </li>
      </ul>
    </>
  );
}
