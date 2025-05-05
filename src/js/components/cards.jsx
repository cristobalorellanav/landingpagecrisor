import React from "react";

const Card = () => {
    return (
        <div className="card">
            <img src="./src/img/tvon-1.png" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find out more</a>
                </div>
        </div>
    );
};

export default Card;