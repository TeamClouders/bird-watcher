import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon } from 'native-base';

export class SpeciesComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Species',
            headerStyle: { backgroundColor: '#1f96f2' },
            headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
            headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
        }
    }
    render() {
        return (

            <Container>
                <Content>
                    <List>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://c402277.ssl.cf1.rackcdn.com/photos/1575/images/carousel_small/Tigers_Main_8.9.2012_Tigers_are_Mighty_But_Vulnerable_HI_103775.jpg?1482157183' }} />
                            </Left>
                            <Body>
                                <Text>Tiger</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'http://www.spiritanimal.info/wp-content/uploads/Wolf-Spirit-Animal-2.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Gray wolf</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://static01.nyt.com/images/2012/05/23/science/fin/fin-blog480.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Fin whale</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://c402277.ssl.cf1.rackcdn.com/photos/340/images/hero_small/HI_257682.jpg?1434400464' }} />
                            </Left>
                            <Body>
                                <Text>Sei whale</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG' }} />
                            </Left>
                            <Body>
                                <Text>Giant panda</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg/1200px-Leatherback_sea_turtle_Tinglar%2C_USVI_%285839996547%29.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Leatherback sea turtle</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>


        )
    }
}
