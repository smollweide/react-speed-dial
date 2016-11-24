import React from 'react';
import TableProps from '../table-props/table-props.jsx';
import Example from '../example/example.jsx';

import './home.css';

const Home = () => {
	return (
		<div className="home">
			<div className="home__header">
				<h1>
					React speed dial<br/>
					<small>
						for: <a href="https://github.com/callemall/material-ui" target="_blank">Material UI</a>
					</small>
				</h1>
			</div>
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

				<h2>Properties</h2>
				<TableProps componentName="SpeedDial" />
				<TableProps componentName="SpeedDialList" />
				<TableProps componentName="SpeedDialListItem" />
			</div>
		</div>
	);
};

Home.displayName = 'Props';

export default Home;
