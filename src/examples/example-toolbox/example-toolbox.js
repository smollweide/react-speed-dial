import React from 'react';
import PropTypes from 'prop-types';
import { grey800, grey200, teal300, cyan900 } from 'material-ui/styles/colors';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';
import IconRewind from 'material-ui/svg-icons/av/fast-rewind';
import IconForwards from 'material-ui/svg-icons/av/fast-forward';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import transitions from 'material-ui/styles/transitions';

import { SpeedDial } from '../../speed-dial';

const list = {
	items: [
		{
			id: '0',
			icon: <IconForwards color={cyan900} />,
		},
		{
			id: '1',
			icon: <IconPause color={cyan900} />,
		},
		{
			id: '2',
			icon: <IconRewind color={cyan900} />,
		},
	],
};

const styles = {
	main: {
		margin: '0 0 50px 0',
		backgroundColor: '#23566a',
		height: 332,
		overflow: 'hidden',
	},
	stage: {
		width: '100%',
		height: '200px',
		background: grey800,
	},
	progress: {
		position: 'absolute',
		width: '100%',
		height: 16,
		top: -16,
		background: grey200,
	},
	progressBar: {
		position: 'absolute',
		width: 2,
		left: '20%',
		height: '100%',
		background: '#245467',
	},
	title: {
		transition: transitions.easeOut(),
		background: '#23566a',
		color: '#f2ffff',
		padding: '36px 24px',
		fontSize: 28,
		lineHeight: 1.1,
		minHeight: 60,
	},
	titleOpen: {
		transition: transitions.easeOut(),
		background: '#23566a',
		color: '#f2ffff',
		padding: '26px 24px',
		minHeight: 24,
	},
};

const Toolbox = ({ onClickCloseToolbox }) => (
	<div style={{ position: 'relative' }}>
		<div style={styles.progress}>
			<div style={styles.progressBar} />
		</div>
		<BottomNavigation
			style={{ background: teal300 }}
		>
			{[].concat(list.items).reverse().map((item) => {
				return (
					<BottomNavigationItem
						key={item.id}
						onTouchTap={onClickCloseToolbox}
						{...item}
					/>);
			})}
		</BottomNavigation>
	</div>
);
Toolbox.propTypes = {
	onClickCloseToolbox: PropTypes.func,
};

/**
 * Class ExampleToolbox
 */
class ExampleToolbox extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @returns {void}
	 */
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			isInTransition: false,
			wasOpened: false,
		};

		this.handleSpeedDialChangeState = this.handleSpeedDialChangeState.bind(this);
	}

	/**
	 * @param {Object} newState - the new state
	 * @returns {void}
	 */
	handleSpeedDialChangeState(newState) {
		this.setState(Object.assign({}, this.state, newState));
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		return (
			<section style={{ maxWidth: 1024, margin: '0 auto' }}>
				<div style={styles.main}>
					<div style={styles.stage} />
					<SpeedDial
						floatingActionButtonProps={{
							backgroundColor: teal300,
							iconStyle: {
								fill: cyan900,
							},
						}}
						icon={<IconPlay />}
						positionV="inline"
						toolbox={{
							className: 'toolbox',
							classNameMorphButton: 'morph-btn',
							height: 56,
						}}
						onChangeState={this.handleSpeedDialChangeState}
					>
						<Toolbox />
					</SpeedDial>
					<div style={this.state.isOpen ? styles.titleOpen : styles.title}>
						Kodaline / In A Perfect World
					</div>
				</div>
			</section>
		);
	}
}

ExampleToolbox.displayName = 'ExampleToolbox';

export default ExampleToolbox;
