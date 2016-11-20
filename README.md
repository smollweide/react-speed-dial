
# react-speed-dial

[![Build Status](https://img.shields.io/travis/smollweide/react-speed-dial/master.svg)](https://travis-ci.org/smollweide/react-speed-dial)
[![Dependencies](https://img.shields.io/david/smollweide/react-speed-dial/master.svg)](https://david-dm.org/smollweide/react-speed-dial)
[![npm](https://img.shields.io/npm/v/react-speed-dial.svg)](https://www.npmjs.com/package/react-speed-dial)
[![npm](https://img.shields.io/npm/dt/react-speed-dial.svg)](https://www.npmjs.com/package/react-speed-dial)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)

> React Component that implements a speed dial using [Material-UI](http://www.material-ui.com).

## Installation

For the installation of Material-UI please have look in the [Material-UI Documentation](https://github.com/callemall/material-ui)

React speed dial is available as an [npm package](https://www.npmjs.org/package/react-speed-dial).

```sh
npm install react-speed-dial
```

## Usage

```jsx
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/Avatar';
import { SpeedDial, SpeedDialList, SpeedDialListItem } from 'react-speed-dial';

injectTapEventPlugin();

const App = () => {
  return (
    <MuiThemeProvider>
      <SpeedDial>
        <SpeedDialList>
          <SpeedDialListItem
            primaryText="Eric Hoffman"
            rightAvatar={<Avatar src="http://lorempixel.com/80/80" />}
          />
        </SpeedDialList>
      </SpeedDial>
    </MuiThemeProvider>
  );
};

App.displayName = 'App';

export default App;
```


### develop

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

- Checkout `git clone https://github.com/smollweide/react-speed-dial.git`
- Install `npm install`
- Start developing `npm start`
- Lint `npm run lint`
- Tests tests `npm test`
- Build `npm run build`
- Static server `npm run static-server`

