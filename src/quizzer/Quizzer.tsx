import React from "react";
import sketch from "./assets/sketch-compressed.png";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <span>Sub-Task 1, sketch</span>
            </div>
            <img src={sketch} alt="A sketch of the Quizzer application" />
        </div>
    );
}
