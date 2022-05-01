// import { useState } from "react";
import { IoChevronForward } from 'react-icons/io5';


export default function SlotPrints() {
    // TO DO
        // Get displayed slot wheel results 
        // Save and print results


        // const [thisPlace, setThisPlace] = useState([]);
        // function handleclick() {
        //     var x = localStorage.getItem("onePlace", JSON.parse);

        //     document.getElementById("place").innerHTML = x;
        //     setThisPlace(x);
        // }      
        

        
    return (
        <>
            <div className="slot-prints">

                {/* <div className="slot-print-box" id="place">
                    <div className="print-img">
                            <div className='print-title-box'>
                            <div className='print-title'>                                
                                <span><h2>{thisPlace.Name}</h2> {thisPlace.Category}</span>  

                                <div className="readmore-btn">
                                    <a href="/" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="print-details">
                    <span>Fredensgade 38, Aarhus C 8000</span>
                        <span>A world of fun </span>
                        <p>{thisPlace.Name}  </p>
                    </div>
                </div>
                <button onClick={handleclick}>get place!</button> */}



             <div className="slot-print-box">
                    <div className="print-img">
                        <img src="https://files.guidedanmark.org/files/484/209363_Aarhus-Braetspilscafe-indendoers.jpg" alt="Aarhus Brætspilscafé" />
                            <div className='print-title-box'>
                            <div className='print-title'>                                
                                <span><h2>Aarhus Brætspilscafé</h2> Place To Eat</span>  

                                <div className="readmore-btn">
                                    <a href="https://aarhusbraetspilscafe.dk/en" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="print-details">
                      {/*   PlacesToEat.js - l. 781 */}
                    <span>Fredensgade 38, Aarhus C 8000</span>
                        <span>A world of fun </span>
                        <p>    A modest admission fee gives you access to a wealth of games, 
                            and a world of fun, where everyone can join in. <br/><br/>
                            If you feel like a bite to eat or something to drink while playing, small delicious dishes, coffee and cakes 
                            are available for purchase. <br/> 
                            You may also bring your own board games, 
                            and even your own food. <br/><br/>
                            Please note, however, that the admission fee also applies whether you play using the café’s or your own games, 
                            and that you may not bring your own drinks or snacks
                        </p>
                    </div>
                </div>  


                <div className="slot-print-box">
                    <div className="print-img">
                        <img src="https://gdkfiles.visitdenmark.com/files/484/281887_Dyrehaven-aarhus-raadyr-2-foto-francesca-dolnier-1024.jpg?width=987" alt="Marselisborg Forests" />
                            <div className='print-title-box'>
                            <div className='print-title'>                                
                                <span><h2>The Deer Park</h2> Attraction</span>  
                                <div className="readmore-btn">
                                    <a href="https://udflugtssteder.aarhus.dk/marselisborg-dyrehave/" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="print-details">
                        {/* Attractions.json -> l. 16109 */}
                        <span>Ørneredevej 6, Højbjerg 8270</span>
                        <p>In the Deer Park there are plenty benches and table-and-bench sets, 
                            so feel free to bring along a picnic basket for a pleasant lunch or a snack in the wonderful surroundings.<br/> <br/>
                            In the park you may go tobogganing or skiing in winter, you can feed the animals fresh apples and carrots, feed the ducks, 
                            and take photographs / film. <br/>
                            Show care for the animals - Leave the Deer Park the way you would like to find 
                            it and walk quietly; it will give you a much bigger experience.<br/> <br/>
                            Opening hours - The Deer Park is open from 8 am until sunset, and admission is free. 
                        </p>
                    </div>
                </div>



                <div className="slot-print-box">
                    <div className="print-img">
                        <img src="https://files.guidedanmark.org/files/484/19777_Racehall_-_Race.jpg" alt="RaceHall" />
                            <div className='print-title-box'>
                            <div className='print-title'>                                
                                <span><h2>RaceHall</h2> Activity</span>  
                                <div className="readmore-btn">
                                    <a href="https://www.visitaarhus.com/aarhus/plan-your-trip/release-your-inner-speed-devil-gdk982110" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                    <div className="print-details">
                        {/* <div className="print-date"><h3>Mandag</h3><p>02.05.22</p></div> */}

                        {/* Activities.json -> l.2071 */}
                        <span>Hasselager Centervej 30, Viby J 8260</span>
                        <span>Release your inner speed devil </span>
                        <p>RaceHall is the place for you, <br/>
                            if you love the smell of petrol – and have some of it running in your veins. <br/> 
                            Racehall is Europe's largest go-cart centre where you can compete against your pals to see who gets the right to gloat! <br/>
                            If you have always believed that you are the best driver among all your friends, this is the perfect 
                            opportunity to prove it.<br/><br/>
                            You can drive the fast go-carts, and afterwards enjoy real American food at the RaceHall diner.
                        </p>
                    </div>
                </div>



                <div className="slot-print-box">
                    <div className="print-img">
                        <img src="https://files.guidedanmark.org/files/484/196119_Moesgaard-Museum-Aarhus-Moesgaard-Vikingetraef.jpg" alt="Vikingetræf" />
                            <div className='print-title-box'>
                            <div className='print-title'>                                 
                                <span><h2>Moesgaard Viking Moot</h2> Event</span>

                                <div className="readmore-btn">
                                    <a href="https://www.vikingetraeffet.dk/english/explore-the-viking-moot/" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="print-details">
                        {/* Events.js -> l. 485 */}
                        <span>Moesgård Allé 15, Højbjerg 8270</span>
                        <p>The market stalls offer a wealth of interesting articles, and craftsmen produce fine items of iron, 
                            wood, leather, silver, wool, amber, glass, willow, and many other materials.<br/><br/>
                            The Viking Moot at Moesgård Beach is an annual event, <br/>
                            which takes place on the last weekend in July - the weekend closest to July 28, the feast day of St. Olaf. 
                            In the Middle Ages and probably in the Viking Age too, this day was a fair day in Aarhus. <br/><br/>
                            Activities for every taste <br/>
                            Visitors can try their skills at different activities. 
                            Archery is especially popular, and here children and adults compete for the best result. 
                            However, there are activities for every taste, and all age groups can take part. <br/><br/>
                            Entry<br/>
                            Adults: DKK 140,-<br/>
                            Free admission for children under the age of 18.
                        </p>
                    </div>
                </div>
                

            </div>
        </>
    );
}