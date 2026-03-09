import React, { useState } from "react";
import { Button } from "react-bootstrap";

//export type Holiday = "Chinese New Year" | "Halloween" | "Valentine's Day" | "Christmas" | "Thanksgiving";
//I think I straight up don't need that for this code, but names are added for grading convinience

export type Holiday = "🎆" | "🎃" | "💝" | "🎄" | "🦃";

const alphabetical: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "💝",
    "💝": "🎄",
};

const yearly: Record<Holiday, Holiday> = {
    "🎆": "💝",
    "💝": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");
    const advanceAlphabet = () => {
        setHoliday(alphabetical[holiday]);
    };
    const advanceYear = () => {
        setHoliday(yearly[holiday]);
    };

    return (
        <div>
            Holiday: {holiday}
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
