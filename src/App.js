import './App.css';
import {
	Switch,
	Route,
	BrowserRouter as Router
} from "react-router-dom";
import { 
	Button, 
	Navbar, 
	Nav, 
	NavDropdown, 
	Form, 
	FormControl 
} from 'react-bootstrap';
import RandomNumbers from './components/RandomNumbers/RandomNumbers';

const App = () => {
	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="home">T</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Tasks" id="basic-nav-dropdown">
							<NavDropdown.Item href="randomNumbers">Task 1 - Random numbers</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.1">Task 1</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Router>
				<Switch>
					<Route path="/randomNumbers">
						<RandomNumbers />
					</Route>
					<Route path="/users">

					</Route>
					<Route path="/">

					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
