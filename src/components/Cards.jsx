import { Link } from "react-router-dom";
const Card = (props) => {
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src={''} className="card-img-top" alt="..." />
       <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
          </p>
          <Link to={''} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    );
  
  
  };
  
  
  export default Card;
  
  
  