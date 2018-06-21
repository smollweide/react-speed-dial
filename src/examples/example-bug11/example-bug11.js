import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import RaisedButton from 'material-ui/RaisedButton';
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
			isSpeedDialOpen: false,
		};

		this.handleToogleSpeedDialOpen = this.handleToogleSpeedDialOpen.bind(this);
		this.handleChangeSpeedDial = this.handleChangeSpeedDial.bind(this);
	}

	/**
	 * @returns {void}
	 */
	handleToogleSpeedDialOpen() {
		this.setState({
			isSpeedDialOpen: !this.state.isSpeedDialOpen,
		});
	}

	/**
	 * @param {boolean} isOpen - the new open state
	 * @returns {void}
	 */
	handleChangeSpeedDial({ isOpen }) {
		this.setState({
			isSpeedDialOpen: isOpen,
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		return (
			<div>
				<RaisedButton
					label="Toggle SpeedDial"
					style={{
						margin: 40,
					}}
					onClick={this.handleToogleSpeedDialOpen}
				/>
				<SpeedDial isOpen={this.state.isSpeedDialOpen} onChange={this.handleChangeSpeedDial}>
					<BubbleList>
						{list.items.map(item => {
							return (
								<BubbleListItem
									key={item.primaryText}
									styleText={{
										backgroundColor: '#ccc',
									}}
									onClick={this.handleToogleSpeedDialOpen}
									{...item}
								/>
							);
						})}
					</BubbleList>
				</SpeedDial>
			</div>
		);
	}
}

ExampleBasic.displayName = 'ExampleBasic';

export default ExampleBasic;
