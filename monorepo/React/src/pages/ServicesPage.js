import Footer from "../components/Footer"
import Header from "../components/Header"
import ServicesCard from "../components/ServicesCard"
import { services } from "../data/services"
import "./ServicesPage.css"


const ServicesPage =()=>{
    return(
        <div>
            <Header></Header>
            <div className="services-card-container" >
                <div className="container" >
                    {services.map(item=>{
                        return <ServicesCard image={item.image } name={item.name} />
                    })}
                    
                </div>
                <div className="information-container">
                    <p>Not sure about consultation type? Please, call <a>0203 7959063</a> </p>
                </div>
            </div>
            <Footer></Footer>

        </div>
        
        
    )
    }
    export default ServicesPage