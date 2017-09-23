import React, { Component } from 'react'
import * as FirebaseClient from './firebase'

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

export class RenderRecordsComponent extends Component {

    constructor() {
        super()
        this.state = {
            recordsArray: []
        };
    }
    componentWillMount() {
        let refRoot = FirebaseClient.database.ref('/record')
        refRoot.on("child_added", (snap) => {
            var obj = snap.val();
            obj.key = snap.key;
            console.log("Records ", obj)
            this.state.recordsArray.push(obj)
            this.setState({ recordsArray: this.state.recordsArray })
        })
    }

    render() {
        console.log('this',this.state.recordsArray)
        return (
            <Container>
                <Content>
                        {this.state.recordsArray.map((value, index) => {
                        return (
                    <List key={index}>
                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: value.speciesIcon }} />
                            </Left>
                            <Body>
                                <Text>{value.speciesName}</Text>
                            </Body>
                            {/* <Radio onPress={this.onCheckBoxPress.bind(this, value)}
                                        selected={(this.state.key === value.key) ? true : false} /> */}
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Text>
                                    Timer
                            </Text>
                            </Left>
                            <Body>
                                <Text>{value.timer}</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: value.url }} />
                            </Left>
                            <Body>
                                <Text>capture image</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Text>
                                    Notes
                                </Text>

                            </Left>
                            <Body>
                                <Text>{value.notes[0].note}</Text>
                                <Text>{value.notes[0].date}</Text>
                            </Body>
                        </ListItem>
                    </List>
                        )
                        })}
                </Content>
            </Container>
        )
    }
}