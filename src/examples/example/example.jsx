import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import './example.css';

const Example = ({ exampleCode, title, subtitle }) => {

	const githubSrcUrl = 'https://github.com/smollweide/react-speed-dial/tree/master/src';

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
					<a
						href={`${githubSrcUrl}/examples/example-${exampleCode}/example-${exampleCode}.jsx`}
						target="_black"
					>
						Example code on github
					</a>
				</CardText>
				<CardText expandable>
					<iframe src={`/#/${exampleCode}`} />
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
