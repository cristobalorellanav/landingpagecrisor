import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div>
					<Jumbotron />
					<div className="row">
						<div className="col-lg-3 col-md-12 d-flex justify-content-center my-3">
							<Card />
						</div>
						<div className="col-lg-3 col-md-12 d-flex justify-content-center my-3">
							<Card />
						</div>
						<div className="col-lg-3 col-md-12 d-flex justify-content-center my-3">
							<Card />
						</div>
						<div className="col-lg-3 col-md-12 d-flex justify-content-center my-3">
							<Card />
						</div>
					</div>
				</div>
				
			</div>
			<Footer/>
		</div>
	);
};

export default Home;