import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Lista } from "./Lista";

//create your first component
const Home = () => {
	return (
		<div className="container contenedor d-flex align-items-center flex-column bg-white my-5 border border-black">
			<h1>Tareas</h1>
           <Lista/>
		</div>
	);
};

export default Home;