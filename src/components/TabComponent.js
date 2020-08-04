import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/Tab_Door';
import TabDevices from './tabs_nav/Tab_Devices';
import TabPrice from './tabs_nav/Tab_price';
import TabContentOne from './tabs_nav/TabContentOne';
import TabContentTwo from './tabs_nav/TabContentTwo';
import TabContentThree from './tabs_nav/TabContentThree';
import '../css/TabsNav.css';

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <div>
        <Tabs
          className='tabs'
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className='tab-nav-container'>
            <Tab
              className={`${
                this.state.tabIndex === 0 ? 'tab-selected active' : null
              }`}
            >
              <TabDoor />
              <p className='lgScreen' style={{ marginBottom: '1.875rem' }}>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
              <br />
              <span className='mdScreen'>Cancel</span>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? 'tab-selected active' : null
              }`}
            >
              <TabDevices />
              <p className='lgScreen' style={{ marginTop: '-5.3125rem' }}>
                <strong>Watch anywhere</strong>
              </p>
              <span className='mdScreen' style={{ marginTop: '-5.3125rem' }}>
                Devices
              </span>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? 'tab-selected active' : null
              }`}
            >
              <TabPrice />
              <p className='lgScreen'>
                <strong>Pick your price </strong>
              </p>
              <br />
              <span className='mdScreen' style={{ marginTop: '0.4rem' }}>
                Price
              </span>
            </Tab>
          </TabList>
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentThree />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
