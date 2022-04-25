import React from "react";
import SlotMachineComp from "../components/SlotMachineComp";
import SlotPrints from "../components/SlotPrints";

export default function HomePage() {
    return (
        <>
            <div className="page">
                <h1>City Break Planner</h1>
                <div className="onboarding-msg">
                    <h2>Onboarding message</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna metus, 
                        elementum vitae suscipit nec, gravida ut leo. Vestibulum finibus vitae massa 
                        faucibus hendrerit.  
                    </p>
                </div>

                <section className="slot-section">
                    <div>
                        <h2>Slot Machine</h2>
                        <SlotMachineComp />
                    </div>
                </section>

                <section className="slot-section">
                    <h2>Results</h2>
                    <div className="slot-print-cntr">
                        <SlotPrints />
                    </div>
                </section>
            </div>
        </>
    )
};
