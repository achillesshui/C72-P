import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase  from 'firebase';


export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            storyText:'',
        }
    }

    submitStory=()=>{
        ToastAndroid.showWithGravity('Your Story Has Been Submitted', ToastAndroid.LONG, ToastAndroid.CENTER);
        alert('Your Story Has Been Submitted');
        console.log("i");
        db.collection('story').add({
            title:this.state.title,
            author:this.state.author,
            storyText:this.state.storyText,
        })

        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        
    }

    render(){
        return(
            <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
            enabled>
                <Header
                    backgroundColor={'lightblue'}
                    centerComponent = {{
                        text:'Story Hub',
                        style:{color:'white', fontSize:20}
                    }}
                />
                <TextInput 
                    placeholder="Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                />
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author}
                />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text 
                    style={styles.buttonText}
                    onPress={this.submitStory} 
                    >Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      title:{
          height: 40,
          width: 300,
          borderWidth: 2,
          marginTop: 40,
          padding: 10,
          margin:10
      },
      author: {
          height: 40,
          width: 300,
          borderWidth: 2,
          padding: 10,
          margin:10
      },
      storyText: {
          height: 250,
          width:300,
          borderWidth: 2,
          margin: 10,
          padding:10
      },
      submitButton:{
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: 'black',
          width: 80,
          height: 40
      },
      buttonText: {
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold'
      }
})