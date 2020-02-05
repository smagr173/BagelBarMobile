/********************************************************************/
/*  Author:     Tyler Kurzawa                                       */
/*  Created:    January 25, 2020                                    */
/*  Course:     CSC 355-020                                         */
/*  Professor:  Dr. Tan                                             */
/*  Filename:   Information.js                                      */
/*  Purpose:    This file contains Information about the bagle shop */
/********************************************************************/

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput, TouchableOpacity,Image } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Information',
 };

render() {
 // const {navigate} = this.props.navigation;
  return (
  <View style={styles.container}>

  <Image source={{uri: 'http://csitrd.kutztown.edu/~smagr173/MainLogo.png'}}
	 style={styles.image1} />
  <Text style={styles.divider}>_____________________________</Text>
  <Text style={styles.spacingForHeadder}> </Text>
  <Text style={styles.spacingForHeadder}> </Text>

  
  <Text style={styles.subtitle}>Address</Text>
  <Text style={styles.bodyText}>214 W. Main St. Kutztown, PA 19530</Text>
  <Text style={styles.spacingForHeadder}> </Text>
  <Text style={styles.subtitle}>Contact</Text>
  <Text style={styles.bodyText}>610-683-5440</Text>
  <Text style={styles.spacingForHeadder}> </Text>
  <Text style={styles.subtitle}>Hours of Operation</Text>
  <Text style={styles.bodyText}>Weekdays: 8:00 AM - 3:00 PM</Text>
  <Text style={styles.bodyText}>Weekends: 7:00 AM - 3:00 PM</Text>
  <Text style={styles.spacingForHeadder}> </Text>
  <Text style={styles.spacingForHeadder}> </Text>  
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

bodyText:{
  color:'gray',
  textAlign:'center',
  fontSize:20
},

title:{
  
  fontWeight:'bold',
  color:'gray',
  textAlign:'center',
  fontSize:30

},

subtitle:{
  
  fontWeight:'bold',
  color:'gray',
  textAlign:'center',
  fontSize:25

},

image1: {
  width:360,
  height:210
},

divider: {
  fontWeight:'bold',
  color:'black',
  textAlign:'center',
  fontSize:17,
  
},

spacingForHeadder:{
marginBottom: 25
},

});