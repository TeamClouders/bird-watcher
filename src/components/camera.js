import React, { Component } from 'react';
import { StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Button, Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export class CameraComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Camera',
            headerStyle: { backgroundColor: '#1f96f2' },
            headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
            headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
        }
    }
    constructor() {
        super()
        this.state = {
            avatarSource: null,
            // videoSource: null,
        };
    }


    selectPhotoTapped() {
        var storage;
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });

                AsyncStorage.getItem("record", (err, res) => {
                    storage = JSON.parse(res);
                    storage.camera = response
                })
                setTimeout(() => {
                    AsyncStorage.setItem('record', JSON.stringify(storage));
                }, 100)
            }
        });
    }

    // selectVideoTapped() {
    //     const options = {
    //         title: 'Video Picker',
    //         takePhotoButtonTitle: 'Take Video...',
    //         mediaType: 'video',
    //         videoQuality: 'medium'
    //     };

    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled video picker');
    //         }
    //         else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             this.setState({
    //                 videoSource: response.uri
    //             });
    //         }
    //     });
    // }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
                        {this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                    </View>
                </TouchableOpacity>
                {/* 
                <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>Select a Video</Text>
                    </View>
                </TouchableOpacity>

                {this.state.videoSource &&
                    <Text style={{ margin: 8, textAlign: 'center' }}>{this.state.videoSource}</Text>
                } */}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
})