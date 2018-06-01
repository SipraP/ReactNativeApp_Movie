
import React,{Component,PropTypes} from 'react';
import {StyleSheet,Text,View,Image,
    TouchableHighlight} from 'react-native';

 export default class MovieItem extends Component {

   _onPressItem = ()=> {
       console.log("Pressed"+this.props.name);
   }
 render(){
     return(

         <Text> movie item </Text>
        
     );
 }


}


 var styles =  StyleSheet.create({
     mainContainer:{
         flexDirection: 'row',
         flex: 1,
         marginBottom: 10
         
     },
     imageView: {
         
         width: 90,
         height: 120
     },
     textView: {
         flex:1,
         fontSize: 18,
         marginLeft: 10,
         alignSelf: 'center',
         color: '#FFFFFF'
         
     }
 })