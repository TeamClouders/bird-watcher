import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AppRegistry,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import {Button, Icon } from 'native-base';
// import firebase from 'firebase';
import * as FirebaseClient from './firebase'

import RNFetchBlob from 'react-native-fetch-blob';


import Note from './note';


// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob


export class NotesComponent extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Note Details',
      headerStyle: { backgroundColor: '#1f96f2' },
      headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
      headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
    }
  }


  state = {
    noteArray: [{ 'date': 'testdate', 'note': 'testnote' }],
    noteText: '',
    loading: null
  }

  submitData(){
    const _vm = this
    _vm.setState({ loading: true})
    
    var storage;
    AsyncStorage.getItem("record", (err, res) => {
        storage = JSON.parse(res);
        storage.notes = this.state.noteArray
        // console.log('Data', storage)

  let rnfbURI = RNFetchBlob.wrap(storage.camera.path);
    Blob.build(rnfbURI,{type:"image/jpeg"}).then(blob=>{
    // console.log('blob',blob);
    let extension = storage.camera.fileName.split(".").pop();
    extension = extension.toLowerCase();
    // console.log("extension" , extension)
    let fileName;
    fileName = Date.now() + "." + extension;
    var storageRef = FirebaseClient.storage.ref().child('upload/'+fileName);
    storageRef.put(blob,{ contentType : 'image/jpeg'}).then(function (snapshot) {

      delete storage.camera
      storage.url = snapshot.downloadURL
      FirebaseClient.database.ref().child('/record/').push(storage)
       _vm.setState({ loading: false })
      },e=>{
        _vm.setState({ loading: false})
      alert('Error occured..',JSON.stringify(error));
    })//.catch(error => alert("Uploading failed"+ JSON.stringify(error)))
  })
});  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
    });

    return (
        (this.state.loading) ? 
        <View style = {styles.container2}>
        <ActivityIndicator
           color = '#bc2b78'
           size = "large"
           style = {styles.activityIndicator}/>
         </View>
         :

      <View style={styles.container}>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

         <View style={styles.footer}>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.submitData.bind(this)} style={styles.submitButton}>
            <Text style={styles.addButtonText}>submit</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })} value={this.state.noteText}
            placeholder='note' placeholderTextColor='white'>
          </TextInput>
        </View>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({ 'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#009DDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 45,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  submitButton: {
    alignSelf: 'flex-end',  
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#E91E63',
    borderColor: '#ccc',
    marginBottom: -45,
    zIndex: 10,
    
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
 },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
})

