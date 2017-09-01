import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Card, CardItem } from 'native-base';

export class GeoLocationComponent extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Map',
      headerStyle: { backgroundColor: '#1f96f2' },
      headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
      headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
    }
  }

  render() {
    return (
      <Container>
     
        <Card>
          <CardItem>
            <Body>
              <Text>
                this is map section
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
