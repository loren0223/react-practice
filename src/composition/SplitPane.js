function Contacts(props) {
	return (
		<ul>
			<li>
				<a href="#">Loren</a>
			</li>
			<li>
				<a href="#">John</a>
			</li>
			<li>
				<a href="#">Eric</a>
			</li>
		</ul>
	);
}

function Chat(props) {
	return <textarea></textarea>;
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">{props.left}</div>
			<div className="SplitPane-right">{props.right}</div>
		</div>
	);
}

function App() {
	return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
