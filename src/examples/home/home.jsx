import React from 'react';
import TableProps from '../table-props/table-props.jsx';
import Example from '../example/example.jsx';
import PageHeader from '../page-header/page-header.jsx';

import './home.css';

const Home = () => {
	return (
		<div className="home">
			<PageHeader />
			<div className="container">
				<h2>Examples</h2>
				<Example
					exampleCode="basic"
					title="Basic"
				/>
				<Example
					exampleCode="top-left"
					title="Position top left"
				/>
				<Example
					exampleCode="no-backdrop"
					title="Without backdrop"
				/>
				<Example
					exampleCode="inbox"
					title="Like inbox"
				/>

				<h2>Properties</h2>
				<TableProps componentName="SpeedDial"/>
				<TableProps componentName="SpeedDialList"/>
				<TableProps componentName="SpeedDialListItem"/>
			</div>
		</div>
	);
};

Home.displayName = 'PageHeader';

export default Home;
