import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const Hints = () => {
    const steps = [
        "Заполните основную информацию",
        "Заполните дополнительную информацию",
    ];

    return (
        <Box sx={{ marginTop: 2 }}>
            <Stepper alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            sx={{
                                "& .MuiStepIcon-root": {
                                    color: "#1976D2 !important",
                                },
                                "& .MuiStepLabel-label": {
                                    color: "#1976D2 !important",
                                },
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default Hints;
