import RandomActivity from "./RandomActivity";
import RandomAttraction from "./RandomAttraction";
import RandomEvent from "./RandomEvent";
import RandomPlaceToEat from "./RandomPlaceToEat";
// import { IoRestaurantOutline, IoCameraOutline, IoGolfOutline, IoMusicalNotesOutline } from "react-icons/io5"; // Ionicons 5 Ikoner + etv alternativer til kategorier
import placesImg from "../assets/placesImgB.png";
import eventsImg from "../assets/eventsImgB.png";
import attractionsImg from "../assets/attractionsImgB.png";
import activitiesImg from "../assets/activitiesImgB.png";



export default function SlotMachineComp() {


    return (
        <>
            <div className="slot-machine-cntr">


                {/* Places To Eat */}
                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                        <div className="slot-wheel-img">
                            <img src={placesImg} alt="places to eat"/> 
                        </div>
                        <h3>Places to eat</h3> 
                    </div>
                    <RandomPlaceToEat />
                </div>


                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                    <div className="slot-wheel-img">
                            <img src={attractionsImg} alt="places to eat"/> 
                        </div>
                    <h3>Attractions</h3>
                    </div>                    
                    <RandomAttraction />
                </div>


                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                    <div className="slot-wheel-img">
                            <img src={activitiesImg} alt="places to eat"/> 
                        </div>
                    <h3>Activities</h3>
                    </div>                    
                    <RandomActivity />
                </div>
                

                {/* Events */}
                <div className="slot-wheel-box">
                <div className="slot-wheel-title"> 
                    <div className="slot-wheel-img">
                            <img src={eventsImg} alt="places to eat"/> 
                        </div>
                    <h3>Events</h3>
                    </div>
                    <RandomEvent />
                </div>

            </div>

        </>
    )
}
