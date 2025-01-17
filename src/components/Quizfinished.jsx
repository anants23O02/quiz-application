import Statcomponent from './Statcomponent.jsx'

export default function Quizfinished() {
    const number = 0;
    return (
        <>
        <main>
            <div id="summary">
                <img src="../src/assets/quiz-complete.png" alt="" />
                <h2>Quiz Completed!!</h2>
                <div id="summary-stats">
                    <Statcomponent text={'skipped'} number={number} />
                    <Statcomponent text={'answered correctly'} number={number} />
                    <Statcomponent text={'answered incorrectly'} number={number} />
                </div>
            </div>
        </main>
        </>
    );
}