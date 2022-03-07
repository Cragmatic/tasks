import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const TIMEHOLIDAYS: string[] = ["💖", "☘️", "🎆", "🎃", "🎄"];
    const ALPHAHOLIDAYS: string[] = ["🎄", "🎆", "🎃", "☘️", "💖"];
    const [holiday, changeHoliday] = useState<string>(TIMEHOLIDAYS[0]);
    function nextTime(): void {
        const index =
            (TIMEHOLIDAYS.findIndex((element: string) => element === holiday) +
                1) %
            5;
        changeHoliday(TIMEHOLIDAYS[index]);
    }
    function nextAlpha(): void {
        const index =
            (ALPHAHOLIDAYS.findIndex((element: string) => element === holiday) +
                1) %
            5;
        changeHoliday(ALPHAHOLIDAYS[index]);
    }
    return (
        <div>
            <Button onClick={() => nextTime()}>
                {" "}
                Next Holiday based on time of Year
            </Button>
            <span> </span>
            <Button onClick={() => nextAlpha()}>
                Next Holiday based on Alphabet
            </Button>
            <div>Cycle Holiday: {holiday}</div>
        </div>
    );
}
