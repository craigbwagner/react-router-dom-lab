import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
	const [mailboxes, setMailboxes] = useState([]);

	function addBox(formData) {
		formData._id = mailboxes.length + 1;
		setMailboxes([...mailboxes, formData]);
	}

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<main>
							<h1>Post Office</h1>
						</main>
					}
				></Route>
				<Route
					path='mailboxes'
					element={<MailboxList mailboxes={mailboxes}/>}
				/>
				<Route
					path='new-mailbox'
					element={<MailboxForm addBox={addBox}/>}
				/>
				<Route
					path='mailboxes/:mailboxId'
					element={<MailboxDetails mailboxes={mailboxes} />}
				/>
			</Routes>
		</>
	);
};

export default App;
