import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { HideTasks } from "./quizzer/HideTasks";

function App(): JSX.Element {
    return (
        <div>
            <Quizzer></Quizzer>
            <HideTasks></HideTasks>
        </div>
    );
}

export default App;
