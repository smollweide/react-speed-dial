import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import RaisedButton from 'material-ui/RaisedButton';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

const avatarImgUrl = 'http://lorempixel.com/80/80/people';
const list = {
	items: [
		{
			primaryText: 'Kerem Suer',
			rightAvatar: <Avatar src={`${avatarImgUrl}/6`} />,
		},
		{
			primaryText: 'Points',
			rightAvatar: <Avatar src={`${avatarImgUrl}/7`} />,
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
class ExampleRtl extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @returns {void}
	 */
	constructor(props) {
		super(props);

		this.state = {
			rtl: true,
		};

		this.handleToogle = this.handleToogle.bind(this);
	}

	/**
	 * @returns {void}
	 */
	handleToogle() {
		this.setState({
			rtl: !this.state.rtl,
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {

		const { rtl } = this.state;

		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>
					{rtl ? 'RTL' : 'LTR'}
				</h1>
				<div style={{ textAlign: 'center' }}>
					<RaisedButton
						label="Toggle"
						style={{ margin: 40 }}
						onClick={this.handleToogle}
					/>
				</div>
				<SpeedDial
					positionH={rtl ? 'left' : 'right'}
				>
					<BubbleList>
						{list.items.map(({ primaryText, rightAvatar }) => {

							const item = {
								primaryText,
							};

							if (rtl) {
								item.leftAvatar = rightAvatar;
							} else {
								item.rightAvatar = rightAvatar;
							}

							return (
								<BubbleListItem
									key={primaryText}
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

ExampleRtl.displayName = 'ExampleRtl';

export default ExampleRtl;
