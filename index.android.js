import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { HomeComponent, CameraComponent, TimerComponent, GeoLocationComponent, NotesComponent } from './src/components';
// React navigation imports
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

// DONT NEED THIS COMPONENT JUST KEEP FOR TESTING
// class birdWatcher extends Component {
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <HomeComponent nav={navigate} />
//     );
//   }
// }

const Screen1Stack = StackNavigator({
  Home: {
    screen: TabNavigator({
      Map: {
        screen: GeoLocationComponent,
      },
      Timer: {
        screen: TimerComponent,
      },
      Species: {
        screen: HomeComponent,
      },
      Camera: {
        screen: CameraComponent,
      },
      Notes: {
        screen: NotesComponent,
      },
    }, {
        tabBarOptions: {
          scrollEnabled: true,
          activeTintColor: '#232323',
          inactiveTintColor: '#FFF'
        }
      })
  }
});

// Define our main drawer navigation
const DrawerStack = DrawerNavigator({
  Dashboard: {
    screen: Screen1Stack,
  },
  Add_Notes: {
    screen: NotesComponent,
  },
  Recording: {
    screen: TimerComponent,
  }
});

AppRegistry.registerComponent("birdWatcher", () => DrawerStack);






// Define our main drawer navigation
// const DrawerStack = StackNavigator({
//   Dashboard: {
//     screen: DrawerNavigator({
//       Map: {
//         screen: Screen3Stack,
//       },
//       Home: {
//         screen: TabNavigator({
//           Timer: {
//             screen: TimerComponent,
//           },
//           Species: {
//             screen: birdWatcher,
//           },
//           Camera: {
//             screen: CameraComponent,
//           },
//           Notes: {
//             screen: NotesComponent,
//           },
//         })
//       }
//     }),
//   }
// });

  /* <Button
      title="Go to Screen12"
      onPress={() => props.navigation.navigate('Screen12')}
    />
    <Button
      onPress={() => props.navigation.navigate('DrawerOpen')}
      title="Open drawer"
    /> */