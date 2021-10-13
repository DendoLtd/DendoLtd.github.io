

import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
} from "reactstrap";

import {
	CardImg, CardText,
	CardSubtitle
} from 'reactstrap';

import Cardb from './Cardb'

// core components

function SignUp() {
	const [firstFocus, setFirstFocus] = React.useState(false);
	const [lastFocus, setLastFocus] = React.useState(false);
	const [emailFocus, setEmailFocus] = React.useState(false);
	return (
		<>
			<div
				className="section section-signup"
				id='perks'
				style={{
					// backgroundImage:
					// 	"url(" + require("assets/img/bg11.jpg").default + ")",
					backgroundColor: '#1199C7',
					backgroundSize: "cover",
					backgroundPosition: "top center",
					minHeight: "700px",
				}}
			>
				<Container>
					<h1>PERKS</h1>
					<div>
						<Cardb/>

					</div>
				</Container>
			</div>
		</>
	);
}

export default SignUp;
