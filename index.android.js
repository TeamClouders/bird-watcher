import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { SpeciesComponent, CameraComponent, TimerComponent, GeoLocationComponent, NotesComponent } from './src/components';
// React navigation imports
import firebase from 'firebase'
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

// DONT NEED THIS COMPONENT JUST KEEP FOR TESTING
class birdWatcher extends Component {
  componentWillMount() {
    // adding firebase configuration
    var config = {
      // apiKey: "<API_KEY>",
      // authDomain: "<PROJECT_ID>.firebaseapp.com",
      // databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
      apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
      authDomain: "react-sample-17caa.firebaseapp.com",
      databaseURL: "https://react-sample-17caa.firebaseio.com",
      projectId: "react-sample-17caa",
      storageBucket: "react-sample-17caa.appspot.com",
      messagingSenderId: "411422279834"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SpeciesComponent nav={navigate} />
    );
  }
}

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
        screen: birdWatcher,
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