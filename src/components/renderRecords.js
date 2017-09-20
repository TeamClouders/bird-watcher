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
            recordsArray: [],
            // key: "",
            // sotrage
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
        return (
            <Container>
                <Content>
                    <List>
                        {/* {this.state.recordsArray.map((value, index) => { */}
                        {/* return ( */}
                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png' }} />
                            </Left>
                            <Body>
                                <Text>user name</Text>
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
                                <Text>user name</Text>
                            </Body>
                        </ListItem>

                        <ListItem avatar style={{ margin: 5 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png' }} />
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
                                {/* <Thumbnail source={{ uri: 'https://media.licdn.com/media/AAEAAQAAAAAAAANbAAAAJDE5NjBkNDk1LTY3ZGQtNDA0NS04YTJiLTdkNmU3NjZiNjI3Mg.png' }} /> */}
                            </Left>
                            <Body>
                                <Text>DETAILS</Text>
                                <Text>DETAILS</Text>
                            </Body>
                        </ListItem>
                        {/* )
                        })} */}
                    </List>
                </Content>
            </Container>
        )
    }
}