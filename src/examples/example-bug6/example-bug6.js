import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

import fakerImage from '../faker-image';

const list = {
	items: [
		{
			primaryText: 'Kerem Suer',
			rightAvatar: <Avatar src={fakerImage(6)} />,
		},
		{
			primaryText: 'Points',
			rightAvatar: <Avatar src={fakerImage(7)} />,
		},
		{
			primaryText: 'Write',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};
/**
 * Class SpeedDial
 */
class ExampleBasic extends React.Component {
	/**
	 * @param {Object} props - component props
	 * @returns {void}
	 */
	constructor(props) {
		super(props);

		this.state = {
			toggle: true,
		};

		this.handleClickAddPoint = this.handleClickAddPoint.bind(this);
	}

	/**
	 * @returns {void}
	 */
	handleClickAddPoint() {
		this.setState({
			toggle: false,
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		return (
			<SpeedDial>
				<BubbleList>
					<BubbleListItem {...list.items[0]} />
					{this.state.toggle ? (
						<BubbleListItem {...list.items[1]} onClick={this.handleClickAddPoint} />
					) : null}
					<BubbleListItem {...list.items[2]} />
				</BubbleList>
			</SpeedDial>
		);
	}
}

ExampleBasic.displayName = 'ExampleBasic';

export default ExampleBasic;
