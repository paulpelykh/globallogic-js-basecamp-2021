import logo from './logo.svg';
import './App.css';
import Name from './components/Name/Name';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Languages from './components/Languages/Languages';
import Education from './components/Education/Education';

function App() {
	return (
		<div className="container">
			<Name />
			<About />
			<Skills />
			<Languages />
			<Education />
			<Contact />
		</div>
	);
}

export default App;
