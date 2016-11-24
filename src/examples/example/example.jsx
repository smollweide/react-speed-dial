import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import './example.css';

const Example = ({ exampleCode, title, subtitle }) => {

	return (
		<div className="example">
			<Card>
				<CardHeader
					actAsExpander
					showExpandableButton
					subtitle={subtitle}
					title={title}
				/>
				<CardText expandable>
					<iframe src={`/${exampleCode}`} />
				</CardText>
				<CardText expandable>
					Place example code here.
				</CardText>
			</Card>
		</div>
	);
};

Example.displayName = 'Example';
Example.propTypes = {
	exampleCode: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string,
};
Example.defaultProps = {};

export default Example;
