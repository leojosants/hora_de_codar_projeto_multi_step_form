import { useState } from 'react';

export const UserFormCustomHook = (steps) => {
    const [
        currentStep,
        setCurrentStep
    ] = useState(0);

    const changesStep = (indice, event) => {
        if (event) event.preventDefault();
        if ((indice < 0) || (indice >= steps.length)) return;
        setCurrentStep(indice);
    };

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changesStep,
        isFisrtStep: (currentStep === 0) ? true : false,
        isLastStep: ((currentStep + 1) === steps.length) ? true : false
    };
};