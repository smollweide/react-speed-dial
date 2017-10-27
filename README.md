
# react-speed-dial [![Build Status](https://img.shields.io/travis/smollweide/react-speed-dial/master.svg)](https://travis-ci.org/smollweide/react-speed-dial)

> React Component that implements a speed dial using [Material-UI](http://www.material-ui.com).

like inbox | toolbox version
------------ | -------------
<img src="https://cloud.githubusercontent.com/assets/2912007/21943125/28c3e96a-d9d0-11e6-96f1-dc3fbf4dae8d.gif" alt="inbox" width="180" /> | <img src="https://cloud.githubusercontent.com/assets/2912007/21943136/32341bf0-d9d0-11e6-8a8f-919b68d19ee5.gif" alt="toolbox" width="180" />
[open demo](https://smollweide.github.io/react-speed-dial/#/inbox) | [open demo](https://smollweide.github.io/react-speed-dial/#/toolbox)


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

import Avatar from 'material-ui/Avatar';
import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';

const App = () => {
  return (
    <MuiThemeProvider>
      <SpeedDial>
        <BubbleList>
          <BubbleListItem
            primaryText="Eric Hoffman"
            rightAvatar={<Avatar src="http://lorempixel.com/80/80" />}
          />
        </BubbleList>
      </SpeedDial>
    </MuiThemeProvider>
  );
};

App.displayName = 'App';

export default App;
```
## Documentation
[http://smollweide.github.io/react-speed-dial/](http://smollweide.github.io/react-speed-dial/)

## Examples
- [Basic](https://smollweide.github.io/react-speed-dial/#/basic)
- [Position top left](https://smollweide.github.io/react-speed-dial/#/top-left)
- [Position inline](https://smollweide.github.io/react-speed-dial/#/inline)
- [Without backdrop](https://smollweide.github.io/react-speed-dial/#/no-backdrop)
- [Like inbox](https://smollweide.github.io/react-speed-dial/#/inbox)
- [Custom direction](https://smollweide.github.io/react-speed-dial/#/direction)
- [With `List` component](https://smollweide.github.io/react-speed-dial/#/list)
- [Toolbox](https://smollweide.github.io/react-speed-dial/#/toolbox)
- [Toolbox fixed](https://smollweide.github.io/react-speed-dial/#/toolbox-fixed)
- [Controlled SpeedDial](https://smollweide.github.io/react-speed-dial/#/bug11)

## Shields
[![coverage status](https://coveralls.io/repos/github/smollweide/react-speed-dial/badge.svg?branch=master)](https://coveralls.io/github/smollweide/react-speed-dial?branch=master)
[![npm](https://img.shields.io/npm/v/react-speed-dial.svg)](http://npm.im/react-speed-dial)
[![downloads](https://img.shields.io/npm/dm/react-speed-dial.svg)](https://npm-stat.com/charts.html?package=react-speed-dial)
[![MIT License](https://img.shields.io/npm/l/react-speed-dial.svg)](http://opensource.org/licenses/MIT)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Contributing

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Getting started

1. Fork the React-speed-dial repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/react-speed-dial.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes and add tests for them, lint, test then push to to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.

### Scripts
- Install `npm install` or `yarn install`
- Start developing `npm start` or `yarn start`
- Lint `npm run lint` or `yarn lint`
- Test `npm test` or `yarn test`
- Build `npm run build` or `yarn build`
- Static server `npm run static-server` or `yarn static-server`

### Coding style
Please follow the coding style of the current code base.
React-speed-dial uses eslint, so if possible, enable linting in your editor to get realtime feedback.
The linting rules can be run manually with `npm run lint`.
