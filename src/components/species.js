import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import firebase from 'firebase'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon, Radio } from 'native-base';

export class SpeciesComponent extends Component {

    constructor() {
        super()
        this.state = {
            speciesArray: [],
            value: "",
            key: ""
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
    componentDidMount() {
        var obj = { name: "mani", age: 234 }
        alert(obj)
        AsyncStorage.setItem('record', JSON.stringify(obj));
    }
    onCheckBoxPress(ev) {
        console.log("EV", ev)
        this.setState({ value: ev });
        this.setState({ key: ev.key })
    }

    render() {
        // console
        return (
            <Container>
                <Content>
                    <List>
                        {this.state.speciesArray.map((value, index) => {
                            return (
                                <ListItem avatar style={{ margin: 5 }} key={index} >
                                    <Left>
                                        <Thumbnail source={{ uri: value.icon }} />
                                    </Left>
                                    <Body>
                                        <Text>{value.name}</Text>
                                    </Body>
                                    <Radio
                                        onPress={this.onCheckBoxPress.bind(this, value)}
                                        selected={(this.state.key === value.key) ? true : false}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        )
    }
}
