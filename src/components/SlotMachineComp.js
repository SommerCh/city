import RandomActivity from "./RandomActivity";
import RandomAttraction from "./RandomAttraction";
import RandomEvent from "./RandomEvent";
import RandomPlaceToEat from "./RandomPlaceToEat";
import { GiKnifeFork, GiLighthouse } from "react-icons/gi";
import { TiCameraOutline } from "react-icons/ti";
import { IoCameraOutline, IoFastFoodOutline } from "react-icons/io5";



export default function SlotMachineComp() {



    return (
        <>
            <div className="slot-machine-cntr">


                {/* Places To Eat */}
                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                    <IoFastFoodOutline /><h3>Places to eat</h3>
                    </div>
                    <RandomPlaceToEat />
                </div>


                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                    <IoCameraOutline /><h3>Attractions</h3>
                    </div>                    
                    <RandomAttraction />
                </div>


                <div className="slot-wheel-box">
                    <div className="slot-wheel-title"> 
                    <IoFastFoodOutline /><h3>Activities</h3>
                    </div>                    
                    <RandomActivity />
                </div>
                

                {/* Events */}
                <div className="slot-wheel-box">
                <div className="slot-wheel-title"> 
                    <GiKnifeFork /><h3>Events</h3>
                    </div>
                    <RandomEvent />
                </div>


            </div>
        </>
    )
}
