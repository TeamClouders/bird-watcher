import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {Button, Icon } from 'native-base';

export class TimerComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Timer',
      headerStyle: { backgroundColor: '#1f96f2' },
      headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
      headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);

  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleStopwatch() {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  };

  render() {
    return (
      <View style={styles.box}>
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={styles.button}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={styles.button}>Reset</Text>
        </TouchableHighlight>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime} />

      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: '#009DDC',
    padding: 10,
    borderRadius: 10,
    width: 220
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7
  }
};

const styles = {
  box: {
    flexDirection: 'column',
    padding: 10,
    margin: 20
  },
  button: {
    padding: 15,
    fontSize: 25,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'flex-end',
    borderColor: '#009DDC'
  },
}

// export default Timer;
//AppRegistry.registerComponent('CVA', () => CVA);
