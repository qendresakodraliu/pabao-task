import "./ServicesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <Link to={`/pages/${props.id}`} className="text-decoration-none">
      <div className="card-component">
        <div className="card-content">
          <img src={props.image} />
          <h3 className="description">{props.name}</h3>
        </div>
        <div className="icon-component">
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </div>
      </div>
    </Link>
  );
};
export default ServicesCard;
