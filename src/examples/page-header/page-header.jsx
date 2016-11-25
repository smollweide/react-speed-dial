import React from 'react';

import './page-header.css';

const PageHeader = () => {
	return (
		<section className="page-header">
			<h1 className="page-header__title">React speed dial</h1>
			<h2 className="page-header__subtitle">React Component that implements a speed dial using Material-UI.</h2>
			<a className="page-header__btn" href="https://github.com/smollweide/react-speed-dial">
				View on GitHub
			</a>
		</section>
	);
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
