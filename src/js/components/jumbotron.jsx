import React from "react";

const Jumbotron = () => {
    return (
        <div >
            <div className="jumbotron bg-light p-5">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate atque, architecto aliquam asperiores itaque dolorum corrupti saepe labore voluptatem quidem suscipit dolorem sunt maxime mollitia, consectetur quae unde officiis sit!</p>
                <hr className="my-4"/>
                    
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
            </div>
        </div>
    );
};

export default Jumbotron;