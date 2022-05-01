import React from "react";
// import SlotPrints from "../components/SlotPrints";
import { IoChevronForward, IoClose, IoPrintOutline } from 'react-icons/io5';


export default function PlanPage() {
    return (
        <>
            <div className="page">
                <div className="msg">
                    <h2>Your plan</h2>
                    <div className="msg-details">
                        <p>View, edit or print your plan
                        </p>
                        <span className="print-icon"><IoPrintOutline /></span>
                    </div>
                </div>

                <section className="slot-section">
                    <div className="slot-print-cntr">

                        
                        <div className="plan-prints">
                            <h2>Torsdag d. 5. Maj</h2>

                                <div className="plan-print-box">
                                    <div className="plan-img">
                                        <img src="https://files.guidedanmark.org/files/484/209363_Aarhus-Braetspilscafe-indendoers.jpg" alt="Aarhus Brætspilscafé" />
                                            <div className='plan-title-box'>
                                            <div className='plan-title'>                                
                                                <span><h2>Aarhus Brætspilscafé</h2> Place To Eat</span>  

                                                <div className="readmore-btn">
                                                    <a href="https://aarhusbraetspilscafe.dk/en" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-details">
                                        <div className="details-title">
                                            <span>A world of fun</span> <IoClose />
                                        </div>
                                            <p>Fredensgade 38, Aarhus C 8000</p>
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

                                <div className="plan-print-box">
                                    <div className="plan-img">
                                    <img src="https://gdkfiles.visitdenmark.com/files/484/281887_Dyrehaven-aarhus-raadyr-2-foto-francesca-dolnier-1024.jpg?width=987" alt="Marselisborg Forests" />
                                            <div className='plan-title-box'>
                                            <div className='plan-title'>                                
                                            <span><h2>The Deer Park</h2> Attraction</span>  
                                            <div className="readmore-btn">
                                                <a href="https://udflugtssteder.aarhus.dk/marselisborg-dyrehave/" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                            </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-details">
                                        <div className="details-title">
                                            <span></span> <IoClose />
                                        </div>
                                        <span>Experience the wonderful population of sika and fallow deer</span>
                                        <p>Ørneredevej 6, Højbjerg 8270</p>
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

                            </div>


                            <div className="plan-prints">
                                <h2>Fredag d. 6 Maj</h2>
                                <div className="plan-print-box">

                                    <div className="plan-img">
                                        <img src="https://files.guidedanmark.org/files/484/259174_fed-fredag-tivoli-friheden-aarhus.jpg" alt="fed fredag" />
                                            <div className='plan-title-box'>
                                            <div className='plan-title'>                                
                                                <span><h2>Fed Fredag Concerts in Tivoli Friheden</h2> Event</span>
                                                <div className="readmore-btn">
                                                    <a href="http://www.visitaarhus.com/ln-int/denmark/see-more-pay-less/enjoy-aarhus-with-an-aarhuscard" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-details">
                                        <div className="details-title">
                                            <span>Outdoor concert in Tivoli Friheden</span> <IoClose />
                                        </div>
                                        <p>Skovbrynet 5, Aarhus C 8000</p>
                                        <p>Each year the biggest amusement park in Aarhus Tivoli Friheden hosts a string of concerts called Fed Fredag. <br /><br />
                                            The concerts are primarily with Danish artists and start around 8 pm. <br/><br />
                                            The atmosphere is fantastic!
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="plan-prints">
                            <h2>Lørdag d. 7 Maj</h2>
                            <div className="plan-print-box">
                                    <div className="plan-img">
                                        <img src="https://files.guidedanmark.org/files/484/19777_Racehall_-_Race.jpg" alt="RaceHall" />
                                            <div className='plan-title-box'>
                                            <div className='plan-title'>                                
                                            <span><h2>RaceHall</h2> Activity</span>  
                                            <div className="readmore-btn">
                                                <a href="https://www.visitaarhus.com/aarhus/plan-your-trip/release-your-inner-speed-devil-gdk982110" target="_blank" rel="noreferrer">Read more <IoChevronForward/> </a>
                                            </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="plan-details">
                                        <div className="details-title">
                                            <span>Release your inner speed devil </span> <IoClose />
                                        </div>
                                        <p>Hasselager Centervej 30, Viby J 8260</p>
                                        <p>RaceHall is the place for you, <br/>
                                            if you love the smell of petrol – and have some of it running in your veins. <br/> 
                                            Racehall is Europe's largest go-cart centre where you can compete against your pals to see who gets the right to gloat! <br/>
                                            If you have always believed that you are the best driver among all your friends, this is the perfect 
                                            opportunity to prove it.<br/><br/>
                                            You can drive the fast go-carts, and afterwards enjoy real American food at the RaceHall diner.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
        </>
    )
};
