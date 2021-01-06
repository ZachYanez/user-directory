import './style.css'


const Cards = (props) => {
    return (
    <div className="col-3">
    <div className="card mt-3">
    <img className="card-img-top" src={props.picture} alt="Card image cap"/>
    <div className="card-body">
    <h5 className="card-title"> {props.first} {props.last}</h5>
    <p className="card-text">Phone #: {props.phone}</p>
    <p className="card-text">Email: {props.email}</p>
    <p className="card-text">state: {props.state}</p>
    </div>
    </div>
    </div>
        );
};

export default Cards;