import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import './example.css';

const Example = ({ exampleCode, title, subtitle }) => {
	const githubSrcUrl = 'https://github.com/smollweide/react-speed-dial/tree/master/src';

	return (
		<div className="example">
			<Card>
				<CardHeader actAsExpander showExpandableButton subtitle={subtitle} title={title} />
				<CardText expandable>
					<a
						href={`${githubSrcUrl}/examples/example-${exampleCode}/example-${exampleCode}.js`}
						target="_black"
					>
						Example code on github
					</a>
				</CardText>
				<CardText expandable>
					<iframe src={`/react-speed-dial/#/${exampleCode}`} />
				</CardText>
			</Card>
		</div>
	);
};

Example.displayName = 'Example';
Example.propTypes = {
	exampleCode: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};
Example.defaultProps = {};

export default Example;
