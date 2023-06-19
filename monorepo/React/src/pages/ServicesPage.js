import { useParams } from "react-router-dom"
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
                        return <ServicesCard image={item.image } name={item.name} id={item.id}  />
                    })}
                    
                </div>
                <div className="information-container">
                <p>
            Not sure about consultation type? Please, call{' '}
            <a href="tel:02037959063">0203 7959063</a>
          </p>
                </div>
            </div>
            <Footer></Footer>

        </div>
        
        
    )
    }
    export default ServicesPage