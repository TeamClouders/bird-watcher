import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Button, Icon, Body, Title, TabHeading, Text, ScrollableTab } from 'native-base';
import { View, Image } from 'react-native'

// import { SpeciesComponent, CameraComponent, TimerComponent } from './index';
import { GeoLocationComponent, TimerComponent, SpeciesComponent, CameraComponent, NotesComponent } from './index';


export class TabComponent extends Component {
    static navigationOptions = {
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Icon name='keypad' />
        ),
    };
    render() {
        return (
            <Container >
                <Header style={styles.Header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')} >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Bird watcher App</Title>
                    </Body>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>

                    <Tab heading={<TabHeading style={styles.TabHeading}><Icon name="map" style={{ color: '#fff' }} />
                        <Text >Map</Text></TabHeading>}>
                        <GeoLocationComponent />
                    </Tab>

                    {/* <Tab heading={<TabHeading style={styles.TabHeading}> */}
                    <Tab heading={<TabHeading style={styles.TabHeading}><Icon name="clock" style={{ color: '#fff' }} />
                    <Text style={{ color: '#fff' }}>Timer</Text></TabHeading>}>
                        <TimerComponent />
                    </Tab>

                    <Tab heading={<TabHeading style={styles.TabHeading}><Icon name="egg" style={{ color: '#fff' }} /><Text style={{ color: '#fff' }}>Species</Text></TabHeading>}>
                        <SpeciesComponent />
                    </Tab>

                    <Tab heading={<TabHeading style={styles.TabHeading}><Icon name="camera" style={{ color: '#fff' }} /><Text style={{ color: '#fff' }}>Camera</Text></TabHeading>}>
                        <CameraComponent />
                    </Tab>

                    <Tab heading={<TabHeading style={styles.TabHeading}><Icon name="clipboard" style={{ color: '#fff' }} /><Text style={{ color: '#fff' }}>Note details</Text></TabHeading>}>
                        <NotesComponent />
                    </Tab>
                </Tabs>

            </Container>
        )

    }
}

const styles = {
    Header: {
        // backgroundColor: '#00bfa5',
        backgroundColor: '#1f96f0',
    },
    mainConatiner: {
        padding: '5%',
        paddingTop: '15%',
    },
    TabHeading: {
        backgroundColor: '#1f96f0'
    }
}