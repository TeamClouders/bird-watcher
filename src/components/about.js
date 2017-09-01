import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Text, Body, Button, Icon } from 'native-base';

export class AboutComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Camera',
            headerStyle: { backgroundColor: '#1f96f2' },
            headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
            headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Camera</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    If you know that you'll eventually need to include your own native code,
                                    Create React Native App is still a good way to get started. In that case
                                    you'll just need to "eject" eventually to create your own native builds.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}