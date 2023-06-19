import "./ServicesCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ServicesCard =(props)=>{
    return(
    
             <div className="card-component">
                <div className="card-content">
                   <img src={props.image}/>
                   <h3 className="description">{props.name}</h3>
                </div>
                <div className="icon-component">
                <FontAwesomeIcon icon={faChevronRight } size="2xl" /> 
                </div>
          
            </div>
    
         )
}
export default ServicesCard