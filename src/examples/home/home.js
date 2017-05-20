import React from 'react';
import TableProps from '../table-props/table-props.js';
import Example from '../example/example.js';
import PageHeader from '../page-header/page-header.js';

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
					exampleCode="inline"
					title="Position inline"
				/>
				<Example
					exampleCode="no-backdrop"
					title="Without backdrop"
				/>
				<Example
					exampleCode="inbox"
					title="Like inbox"
				/>
				<Example
					exampleCode="direction"
					title="Custom direction"
				/>
				<Example
					exampleCode="list"
					title="With `List` component"
				/>
				<Example
					exampleCode="toolbox"
					title="Toolbox"
				/>
				<Example
					exampleCode="toolbox-fixed"
					title="Toolbox fixed"
				/>
				<Example
					exampleCode="rtl"
					title="RTL"
				/>

				<h2>Properties</h2>
				<TableProps componentName="SpeedDial" />
				<TableProps componentName="BubbleList" />
				<TableProps componentName="BubbleListItem" />
			</div>
		</div>
	);
};

Home.displayName = 'PageHeader';

export default Home;
