import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [hidden, setHidden] = useState<boolean>(true);
    return (
        <span>
            <Button
                onClick={() => {
                    setHidden(!hidden);
                }}
            >
                onClick= {hidden ? "Reveal Answer" : "42"}
            </Button>
        </span>
    );
}
