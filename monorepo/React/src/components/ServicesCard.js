import "./ServicesCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ServicesCard =()=>{
    return(
    
             <div className="card-component">
                <div className="card-content">
                   <img src="https://picsum.photos/50/50?random=1" />
                   <h3 className="description">description</h3>
                </div>
                <div className="icon-component">
                <FontAwesomeIcon icon={faChevronRight } size="2xl" /> 
                </div>
          
            </div>
    
         )
}
export default ServicesCard