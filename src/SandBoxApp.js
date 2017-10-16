import React   from 'react';
import { css } from 'glamor';
import { App, Bare } from '@pixelduet/react-prime-ui';

import DemoTab from './Stories/Demo';
import ControlsTab from './Stories/Controls';

const { Host, TabBar } = App;
const { Palette } = Bare;

const ROOT_CSS = css({
  height: '100%',
  width : '100%'
});

export default class AppImpl extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      tab      : 1
    };
  }

  handleTabChange(nextValue) {
    this.setState(() => ({ tab: nextValue }));
  }

  render() {
    return(
      <Host css={ ROOT_CSS }>
        <Palette>
          <TabBar
            onChange={ this.handleTabChange }
            value   ={ this.state.tab }
          >
            <TabBar.Tab button="Demo">
              <DemoTab />
            </TabBar.Tab>
            <TabBar.Tab button="Controls">
              <ControlsTab />
            </TabBar.Tab>
          </TabBar>
        </Palette>
      </Host>
    );
  }
}
