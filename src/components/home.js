import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Button, Icon } from 'native-base';

export class HomeComponent extends Component {
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
                        <ListItem itemHeader first>
                            <Text>Species List</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>African Wild Dog	</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Albacore Tuna	</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Amazon River Dolphin	</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Amur Leopard	</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Amur Tiger</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Arctic Fox</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Arctic Wolf</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Loxodonta africana</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Lycaon pictus</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Thunnus alalunga</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Scientific Name Inia geoffrensis</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Panthera pardus orientalis</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Panthera pardus orientalis</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Vulpes lagopus</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Canis lupus arctos</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Endangered</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
