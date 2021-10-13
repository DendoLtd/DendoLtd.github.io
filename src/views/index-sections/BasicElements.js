import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
	Button,
	Label,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from "reactstrap";

// core components

function BasicElements() {
	const [leftFocus, setLeftFocus] = React.useState(false);
	const [rightFocus, setRightFocus] = React.useState(false);
	React.useEffect(() => {
		// if (
		//   !document
		//     .getElementById("sliderRegular")
		//     .classList.contains("noUi-target")
		// ) {
		//   Slider.create(document.getElementById("sliderRegular"), {
		//     start: [50],
		//     connect: [true, false],
		//     step: 0.5,
		//     range: { min: 0, max: 100 },
		//   });
	}
		// if (
		//   !document.getElementById("sliderDouble").classList.contains("noUi-target")
		// ) {
		//   Slider.create(document.getElementById("sliderDouble"), {
		//     start: [20, 80],
		//     connect: [false, true, false],
		//     step: 1,
		//     range: { min: 0, max: 100 },
		//   });
		// }
	);
	return (
		<>
			<div className="section section-basic" id="vision"
				style={{
					backgroundColor:  '#D4EEF7'  ,
					// backgroundImage:
					// 	"url(" + require("assets/img/blurred-image-1.jpg").default + ")",
					backgroundSize: "cover",
					backgroundPosition: "top center",
					minHeight: "700px",
				}}
			>

				<Container>
					<h2 className="title">VISION</h2>
					<div  style={{ fontSize:'20px' , color:'black', fontWeight: 'heavy'}} >
						<strong >
							
								<p  > We as an organization aspire a world with minimal or no mental issues, which can lead to disastrous solution which people think is, is suicide. In our country mental illness is treated like a taboo, but literally it is just like another normal disease which needs a professional treatment. “Peaceful mind, soulful life”, quotes sum up everything.
								</p>
								<br></br>
								<p > There are numerous opportunities hovering around us, but we can see only those which are traversed by people in our surroundings, and that bounds the future for a child, probably waste of thousands of talents and genius minds.
								</p>
								<br></br>
								<p> "Children are like wet cement. Whatever falls on them makes an impression." -Haim Ginott
									Just a hand with proper path can lead this force to pull out marvels in universe. We will connect our hands with such prodigies to provide the best possible outcomes this life can lead too.
								</p>
							
						</strong>
					</div>
				</Container>
			</div>
		</>
	);
}

export default BasicElements;
