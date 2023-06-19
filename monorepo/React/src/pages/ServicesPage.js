import Footer from "../components/Footer"
import Header from "../components/Header"
import ServicesCard from "../components/ServicesCard"
import "./ServicesPage.css"

const ServicesPage =()=>{
    return(
        <div>
            <Header></Header>
            <div className="ServicesCardContainer" >
                <div className="container" >
                    <ServicesCard image={"https://picsum.photos/50/50?random=1" } name={"Anti Wrinkle Treatment "} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=2" } name={"Dermal Fillers "} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=3" } name={"Secret RF "} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=4" } name={"HArmonyCA "} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=5" } name={"Profhilo "} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=6" } name={"Facials"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=7" } name={"ScleroTherapy"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=8" } name={"LED"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=9" } name={"Fat Dissolve"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=10" } name={"Growth Factors"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=11" } name={"Special Package for Time Clinic"} />
                    <ServicesCard image={"https://picsum.photos/50/50?random=12" } name={"Consultation"} />
                </div>
                {/* <div>
                    <p>Not sure about consultation type? Please, call <a>0203 7959063</a> </p>
                </div> */}
            </div>
            <Footer></Footer>

        </div>
        
        
    )
    }
    export default ServicesPage