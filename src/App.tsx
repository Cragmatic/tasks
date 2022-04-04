import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { HideTasks } from "./quizzer/HideTasks";

function App(): JSX.Element {
    return (
        <div>
            <Quizzer></Quizzer>
            <h1>Completed features: </h1>
            <h2>
                (Bullets of this size are complete and have tests, if
                applicable)
            </h2>
            <h2>* Application is sketched</h2>
            <h2>* Quizzes have questions</h2>
            <h2>* Short answer and Multiple Choice questions</h2>
            <h2>* Check correctness</h2>
            <h3>(Bullets of this size are incomplete in some way) </h3>
            <h3>
                * Quizzes are Visible (only name, but selectable. Tests for
                selection)
            </h3>
            <HideTasks></HideTasks>
        </div>
    );
}

export default App;
