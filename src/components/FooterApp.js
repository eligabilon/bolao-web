import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const rankingIcon = <FontIcon className="material-icons">format_list_numbered</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">date_range</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">perm_device_information</FontIcon>;

class FooterApp extends Component {
    state = {
      selectedIndex: 0,
    };
  
    select = (index) => this.setState({selectedIndex: index});
  
    render() {
      return (
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Ranking"
              icon={rankingIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Matches"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Info"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      );
    }
  }
  
  export default FooterApp;