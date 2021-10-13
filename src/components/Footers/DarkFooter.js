/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
	return (
		<footer className="footer" data-background-color="black" id='contact'>
			<Container>
				<nav>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/prithviraj-chauhan/"
								target="_blank"
							>
								Team Dendo
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/74050850"
								target="_blank"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/feed/update/urn:li:activity:6815952720344715264"
								target="_blank"
							>
								Blog
							</a>
						</li>
					</ul>
				</nav>
				<div className="copyright" id="copyright">
					© {new Date().getFullYear()}, Designed by{" "}
					
					Dendo .Inc

					. Coded by{" "}
					
						Team Dendo
					
					.
				</div>
			</Container>
		</footer>
	);
}

export default DarkFooter;
