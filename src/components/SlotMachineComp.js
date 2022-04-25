import Activities from "./Activities";
import Attractions from "./Attractions";
import Events from "./Events";
import PlacesToEat from "./PlacesToEat";


export default function SlotMachineComp() {


    return (
        <>
            <div className="slot-machine-cntr">
                <div className="slot-wheel-box">
                    <h3>Places to eat</h3>
                    <div className="slot-wheel">
                        <PlacesToEat /> 
                    </div>  
                </div>

                <div className="slot-wheel-box">
                    <h3>Attractions</h3>
                    <div className="slot-wheel">
                        <Attractions />
                    </div>
                </div>

                <div className="slot-wheel-box">
                    <h3>Activities</h3>
                    <div className="slot-wheel">
                        <Activities />
                    </div>
                </div>
                
                <div className="slot-wheel-box">
                    <h3>Events</h3>
                    <div className="slot-wheel">
                        <Events />
                    </div>
                </div>
            </div>
        </>
    )
}
