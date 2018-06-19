/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={
    ImageSource: null,

  };

  selectPhotoTapped(){
    const options={
      quality:1.0,
      maxWidth:500,
      maxHeight:500,
      storageOptions:{
        skipBackup:true
      }
    };

    ImagePicker.showImagePicker(options,(response)=>{
      console.log('Response = ',response);
      if(response.didCancel){
        console.log('User cancelled photo picker');
      }
      else if(response.error){
        console.log('ImagePicker Error : ',response.error);
      }
      else if(response.customButton){
        console.log('User tapped custom button',response.customButton);
      }
      else{
        let source = {uri:response.uri};
        this.setState({
          ImageSource : source
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.welcome}>
            { this.state.ImageSource === null ? <Text>Unknown</Text>:
            <Image style={styles.welcome} source={this.state.ImageSource} />
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width:145,
    backgroundColor:'blue',
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 5,
    paddingVertical: 13
  },
  buttoninduk: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'#ffffff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    fontSize:20,
    color:'#000000',
    textAlign:'center',
    borderColor:'black',
    borderWidth:1/PixelRatio.get(),
  },
  welcome: {
    borderRadius:10,
    width:250,
    height:250,
    borderColor:'black',
    borderWidth:1/PixelRatio.get(),
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'blue',
    marginVertical: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Optional',()=>Optional);
