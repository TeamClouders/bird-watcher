import React, { Component } from 'react'
import firebase from 'firebase'
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

    constructor() {
        super()
        this.state = {
            speciesArray: []
        };
    }
    componentWillMount() {
        let refRoot = firebase.database().ref('/list')
        refRoot.on("child_added", (snap) => {
            var obj = snap.val();
            obj.key = snap.key;
            this.state.speciesArray.push(obj)
            this.setState({ speciesArray: this.state.speciesArray })
        })
    }

    render() {
        console.log(this.state.speciesArray)
        return (

            <Container>
                <Content>
                    <List>

                        {/* {this.state.speciesArray.map((value, index) => {
                            return (
                                <ListItem avatar style={{ margin: 5 }} key={index}>

                                    <Left>
                                        <Thumbnail source={{ uri: value.Icon }} />
                                    </Left>
                                    <Body>
                                        <Text>{value.name}</Text>
                                    </Body>
                                </ListItem>
                            )
                        })} */}


                        <ListItem avatar style={{ margin: 5 }}>

                            <Left>
                                <Thumbnail source={{ uri: 'https://c402277.ssl.cf1.rackcdn.com/photos/1575/images/carousel_small/Tigers_Main_8.9.2012_Tigers_are_Mighty_But_Vulnerable_HI_103775.jpg?1482157183' }} />
                            </Left>
                            <Body>
                                <Text>Tiger</Text>
                            </Body>
                        </ListItem>

                    </List>
                </Content>
            </Container>


        )
    }
}
