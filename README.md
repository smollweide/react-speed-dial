
# material-ui-speed-dial

[![Build Status](https://img.shields.io/travis/smollweide/material-ui-speed-dial/master.svg)](https://travis-ci.org/smollweide/material-ui-speed-dial)
[![Dependencies](https://img.shields.io/david/smollweide/material-ui-speed-dial/master.svg)](https://david-dm.org/smollweide/material-ui-speed-dial)
[![npm](https://img.shields.io/npm/v/material-ui-speed-dial.svg)](https://www.npmjs.com/package/material-ui-speed-dial)
[![npm](https://img.shields.io/npm/dt/material-ui-speed-dial.svg)](https://www.npmjs.com/package/material-ui-speed-dial)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)

> React Component that implements a Speed dial using [Material-UI](http://www.material-ui.com).

## Installation

For the installation of Material-UI please have look in the [Material-UI Documentation](https://github.com/callemall/material-ui)

Material-UI Speed dial is available as an [npm package](https://www.npmjs.org/package/material-ui-speed-dial).

```sh
npm install material-ui-speed-dial
```

## Usage

```jsx
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/Avatar';
import { SpeedDial, SpeedDialList, SpeedDialListItem } from 'material-ui-speed-dial';

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

- Checkout `git clone https://github.com/smollweide/material-ui-speed-dial.git`
- Install `npm install`
- Start developing `npm start`
- Lint `npm run lint`
- Tests tests `npm test`
- Build `npm run build`
- Static server `npm run static-server`

