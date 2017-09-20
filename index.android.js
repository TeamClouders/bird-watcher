import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { RenderRecordsComponent,TabComponent,SpeciesComponent, CameraComponent, TimerComponent, GeoLocationComponent, NotesComponent } from './src/components';
// React navigation imports
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import { Button, Icon } from 'native-base';

// Define our main drawer navigation
const DrawerStack = DrawerNavigator({
  Dashboard: {
    screen: TabComponent,
  },
  Recording: {
    screen: RenderRecordsComponent,
  }
});

AppRegistry.registerComponent("birdWatcher", () => DrawerStack);