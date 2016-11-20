
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
