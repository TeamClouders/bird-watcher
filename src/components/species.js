import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
// import firebase from 'firebase'
import * as FirebaseClient from './firebase'
import InfiniteScroll from 'react-native-infinite-scroll';

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
    Radio,
    Spinner
} from 'native-base';

export class SpeciesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            speciesArray: [],
            key: "",
            limit: 10,
            prevL: 0,
            load : false
            // sotrage
        };
        this.loadMore = this.loadMore.bind(this);
        this.loadDataOnMount = this.loadDataOnMount.bind(this);
    }
    componentWillMount() {
        this.loadDataOnMount();
    }
    loadDataOnMount(){
        var count = 0;
        let refRoot = FirebaseClient.database.ref('/list')
        refRoot.limitToFirst(this.state.limit).on("child_added", (snap) => {
            count++; 
            if(count > this.state.prevL){
                var obj = snap.val();
                obj.key = snap.key;
                this.state.speciesArray.push(obj)
                setTimeout(()=>{
                    this.setState({ speciesArray: this.state.speciesArray })
                    this.setState({load : false})
                },100);
            } 
        })
        
    }
    onCheckBoxPress(ev) {
        var storage;
        this.setState({ key: ev.key })

        AsyncStorage.getItem("record", (err, res) => {
            storage = JSON.parse(res);
            storage.speciesIcon = ev.icon
            storage.speciesName = ev.name
            AsyncStorage.setItem('record', JSON.stringify(storage));
        })

    }
    loadMore(){ 
        this.setState({load : true})
        this.setState({prevL: this.state.limit});
        this.setState({limit: this.state.limit+ 10});
        setTimeout(()=> {
            this.loadDataOnMount();
        }, 100);
 
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
                        {
                            (this.state.load) ?
                            <Spinner color='#1f96f0' />
                            : 
                            <Button block info onPress={this.loadMore}>
                                       <Text>Load more</Text>
                             </Button>

                        }

                       
                    </List>
                </Content>
            </Container>
        )
    }
}