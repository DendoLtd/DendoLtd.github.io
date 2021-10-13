import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Button,
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 399 ||
				document.body.scrollTop > 399
			) {
				setNavbarColor("");
			} else if (
				document.documentElement.scrollTop < 400 ||
				document.body.scrollTop < 400
			) {
				setNavbarColor("navbar-transparent");
			}
		};
		window.addEventListener("scroll", updateNavbarColor);
		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	});
	return (
		<>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open");
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							href="https:www.dendo.co.in"
							target="_blank"
							id="navbar-brand"
						>
						<h3>	DENDO </h3>
						</NavbarBrand>
						<UncontrolledTooltip target="#navbar-brand">
							Designed by Dendo.inc
						</UncontrolledTooltip>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle("nav-open");
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse
						className="justify-content-end"
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<NavItem>
								<NavLink
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("index")
											.scrollIntoView();
									}}
								>
									
									<p><h3>Home</h3></p>
								</NavLink>
							</NavItem>



							<NavItem>
								<NavLink
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("vision")
											.scrollIntoView();
									}}
								>
									
									<p><h3>Vision</h3></p>
								</NavLink>
							</NavItem>



							<NavItem>
								<NavLink
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("perks")
											.scrollIntoView();
									}}
								>
									
									<p><h3>Perk</h3></p>
								</NavLink>
							</NavItem>



							<NavItem>
								<NavLink
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("contact")
											.scrollIntoView();
									}}
								>
									
									<p><h3>Contact Us</h3></p>
								</NavLink>
							</NavItem>


							<NavItem>
								<NavLink
									href="#pablo"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("download-section")
											.scrollIntoView();
									}}
								>
									
									<p><h3>Download</h3></p>
								</NavLink>
							</NavItem>





						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default IndexNavbar;
