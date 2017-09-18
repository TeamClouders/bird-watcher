import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import firebase from 'firebase'
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Button,
    Icon,
    Radio
} from 'native-base';

export class SpeciesComponent extends Component {

    constructor() {
        super()
        this.state = {
            speciesArray: [],
            key: "",
            // sotrage
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

    onCheckBoxPress(ev) {
        var storage;
        this.setState({ key: ev.key })

        AsyncStorage.getItem("record", (err, res) => {
            storage = JSON.parse(res);
            console.log(1, storage)
            storage.speciesKey = ev.key
            console.log(2, storage)
        })
        setTimeout(() => {
            AsyncStorage.setItem('record', JSON.stringify(storage));
        }, 100)

    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {this.state.speciesArray.map((value, index) => {
                            return (
                                <ListItem avatar style={{ margin: 5 }} key={index}>
                                    <Left>
                                        <Thumbnail source={{ uri: value.icon }} />
                                    </Left>
                                    <Body>
                                        <Text>{value.name}</Text>
                                    </Body>
                                    <Radio onPress={this.onCheckBoxPress.bind(this, value)}
                                        selected={(this.state.key === value.key) ? true : false} />
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        )
    }
}