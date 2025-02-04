import React, { useState } from "react";
import { ChangeType } from "../components/ChangeType";
import { RevealAnswer } from "../components/RevealAnswer";
import { StartAttempt } from "../components/StartAttempt";
import { TwoDice } from "../components/TwoDice";
import { CycleHoliday } from "../components/CycleHoliday";
import { Counter } from "../components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "../bad-components/ColoredBox";
import { ShoveBox } from "../bad-components/ShoveBox";
import { ChooseTeam } from "../bad-components/ChooseTeam";
import { CheckAnswer } from "../form-components/CheckAnswer";
import { GiveAttempts } from "../form-components/GiveAttempts";
import { EditMode } from "../form-components/EditMode";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import { ChangeColor } from "../form-components/ChangeColor";
import { Button } from "react-bootstrap";

export function HideTasks(): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(true);
    return (
        <div>
            {!hidden && (
                <div>
                    <div className="App">
                        <header className="App-header">
                            Hello World! - Welcome to UD CISC275 with React
                            TypeScript (ft Craig)
                        </header>
                        <hr></hr>

                        <CheckAnswer expectedAnswer="42"></CheckAnswer>
                        <hr></hr>
                        <GiveAttempts></GiveAttempts>
                        <hr></hr>
                        <EditMode></EditMode>
                        <hr></hr>
                        <ChangeColor></ChangeColor>
                        <hr></hr>
                        <MultipleChoiceQuestion
                            options={["a", "b", "c"]}
                            expectedAnswer="b"
                        ></MultipleChoiceQuestion>
                        <hr></hr>
                        {/* <DoubleHalf></DoubleHalf> */}

                        <hr></hr>
                        <ChooseTeam></ChooseTeam>
                        <hr></hr>
                        <ColoredBox></ColoredBox>
                        <hr></hr>
                        <ShoveBox></ShoveBox>
                        <hr></hr>
                        <Counter></Counter>
                        <hr />
                        <RevealAnswer></RevealAnswer>
                        <hr />
                        <StartAttempt></StartAttempt>
                        <hr />
                        <TwoDice></TwoDice>
                        <hr />
                        <ChangeType></ChangeType>
                        <hr />
                        <CycleHoliday></CycleHoliday>
                    </div>
                </div>
            )}
            <Button onClick={() => setHidden(!hidden)}>
                Show or Hide Tasks
            </Button>
        </div>
    );
}
