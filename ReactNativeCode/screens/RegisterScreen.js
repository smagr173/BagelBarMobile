/********************************************************************/
/*  Author:     Stephen Magrowski                                   */
/*  Created:    January 15, 2020                                    */
/*  Filename:   RegisterScreen.js                                   */
/*  Purpose:    This file contains the user registration screen     */
/*              to create an account. It allows the user to         */
/*              enter their name, email, and password into the      */
/*              input fields. These credentials are then sent to    */
/*              a PHP file where they are entered into a database.  */
/*                                                                  */
/********************************************************************/

import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Keyboard, AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class register extends Component {
  // Initialize default states for variables
  constructor(props) {
    super(props)
      this.state = {
        userFname: '',
        userLname: '',
        userEmail: '', 
        userPassword1: '',
        fnamePlace: 'First Name',	
        lnamePlace: 'Last Name',
        emailPlace: 'Email Address',
        passPlace: 'Password',
        invalidEmail: '',
        regFail: '',
        fnamePlaceText: '#606060',
        lnamePlaceText: '#606060',
        emailPlaceText: '#606060',
        passPlaceText: '#606060',
        invalidPass: '',
      }
  }  // End constructor

  // On text change userRegister gets called
  // Inputs get checked, then sent as JSON to PHP file, error msgs sent back
  userRegister = () => {
    const {userEmail,userPassword1,userFname,userLname} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(userEmail) === false && userPassword1=="" && userFname=="" && userLname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      return false;
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === false && userEmail!="" && userFname=="" && userLname=="" && userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === false && userEmail!="" && userFname==""&& userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === false && userEmail!="" && userLname=="" && userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userLname=="" && userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userLname=="" && userPassword1!="" && userFname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userPassword1!="" && userFname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userPassword1!="" && userFname!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userPassword1!="" && userLname!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail=="" && userPassword1!="" && userFname!="" && userLname!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === true && userEmail!="" && userPassword1!="" && userFname=="" && userLname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === true && userEmail!="" && userPassword1!="" && userLname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && reg.test(userEmail) === true && userEmail!="" && userPassword1!="" && userFname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(reg.test(userEmail) === true && userEmail!="" && userPassword1 >=6 && userFname=="" && userLname=="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && reg.test(userEmail) === false && userEmail!="" && userLname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && reg.test(userEmail) === false && userEmail!="" && userFname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && reg.test(userEmail) === false && userEmail!="" && userLname=="" && userFname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && reg.test(userEmail) === false && userEmail!="" && userLname!="" && userFname!="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ invalidEmail: 'Email address must be valid'})
    }
    else if(reg.test(userEmail) === false && userPassword1=="" && userFname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      return false;
    }
    else if(reg.test(userEmail) === false && userPassword1=="" && userLname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      return false;
    }
    else if(reg.test(userEmail) === false && userLname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      return false;
    }
    else if(reg.test(userEmail) === false  && userFname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      return false;
    }
    else if(reg.test(userEmail) === false && userLname=="" && userFname=="" && userEmail!="") {
      this.setState({ invalidEmail: 'Email address must be valid'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
      return false;
    }
    else if(userEmail=="" && userPassword1=="" && userFname=="" && userLname=="") {
		  this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userPassword1=="" && userFname=="") {
		  this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && userFname=="" && userLname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userFname=="" && userLname=="") {
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userPassword1=="" && userLname=="") {
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userFname=="" && userLname=="") {
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && userLname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userPassword1=="" && userFname=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userFname=="") {
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userLname=="") {
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userEmail=="" && userPassword1=="") {
		  this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
    }
    else if(userFname=="") {
      this.setState({ fnamePlace: 'First name is required'})
      this.setState({ fnamePlaceText: 'red'})
    }
    else if(userLname=="") {
      this.setState({ lnamePlace: 'Last name is required'})
      this.setState({ lnamePlaceText: 'red'})
    }
    else if(userEmail=="") {
      this.setState({ emailPlace: 'Email address is required'})
      this.setState({ emailPlaceText: 'red'})
    }
    else if(userPassword1=="") {
      this.setState({ passPlace:'Password is required'})
      this.setState({ passPlaceText: 'red'})
    }
    else if(userPassword1.length < 6 && userEmail!="" && reg.test(userEmail)=== false && userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
      this.setState({ invalidEmail: 'Email address must be valid'})
    }
    else if(userPassword1.length < 6 && userPassword1!="") {
      this.setState({ invalidPass:'Password must be at least 6 characters'})
    }
		else if(reg.test(userEmail) === false && userEmail!="") {
    this.setState({ invalidEmail: 'Email address must be valid'})
		return false;
    }
    else{
    // Networking for sending user inputs to PHP server
    fetch('http://csitrd.kutztown.edu/BBmobile/ReactBackend/create_account.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      // Input values get converted to JSON here
      body: JSON.stringify({
        fname: this.state.userFname,
        lname: this.state.userLname,
        email: this.state.userEmail,
        password1: this.state.userPassword1,
      })
    
    }) // End fetch
    // Handle response from PHP
    .then((response) => response.json())
      .then((responseJson) => {      // responseJson contains error msgs
        if(responseJson.suc == "Success") {
          this.setState({ userFname: ''})
          this.setState({ userLname: ''})
          this.setState({ userEmail: ''})
          this.setState({ userPassword1: ''})
          this.setState({fnamePlace: 'First Name'})
          this.setState({lnamePlace: 'Last Name'})
          this.setState({emailPlace: 'Email Address'})
          this.setState({passPlace: 'Password'})
          this.setState({invalidEmail: ''})
          this.setState({regFail: ''})
          this.setState({fnamePlaceText: 'gray'})
          this.setState({lnamePlaceText: 'gray'})
          this.setState({emailPlaceText: 'gray'})
          this.setState({passPlaceText: 'gray'})
          this.setState({invalidPass: ''})
          const {navigate} = this.props.navigation;
          navigate('SignIn') // Redirect to sign in page
        }
        if(responseJson.fnameErr == "First name is required") {
          this.setState({ fnamePlace: responseJson.fnameErr})
          this.setState({ fnamePlaceText: 'red'})
        }
        if(responseJson.lnameErr == "Last name is required") {
          this.setState({ lnamePlace: responseJson.lnameErr})
          this.setState({ lnamePlaceText: 'red'})
        }
        if(responseJson.eErr == "Email address is required") {
          this.setState({ emailPlace: responseJson.eErr})
          this.setState({ emailPlaceText: 'red'})
        }
        if(responseJson.passReq == "Password is required") {
          this.setState({ passPlace: responseJson.passReq})
          this.setState({ passPlaceText: 'red'})
        }
        if(responseJson.eTaken == "The email you entered is already being used") {
          this.setState({ invalidEmail: responseJson.eTaken})
        }
        if(responseJson.fail == "Register failed: Check connection") {
          this.setState({ regFail: responseJson.fail})
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }  // End else
      Keyboard.dismiss();
  }  // End userRegister

  handleEmail = (text) => {
    this.setState({ userEmail: text })
    this.setState({ invalidEmail: ''})
  }
  handlePass = (text) => {
    this.setState({ userPassword1: text })
    this.setState({ invalidPass: ''})
  }
  handleFname = (text) => {
    this.setState({ userFname: text })
  }
  handleLname = (text) => {
    this.setState({ userLname: text })
  }

  // Display input fields and buttons
  render() {
    const { fnamePlaceText } = this.state;
    const { lnamePlaceText } = this.state;
    const { emailPlaceText } = this.state;
    const { passPlaceText } = this.state;
    const { fnamePlace } = this.state;
    const { lnamePlace } = this.state;
    const { emailPlace } = this.state;
    const { passPlace } = this.state;
    const { invalidEmail } = this.state;
    const { regFail } = this.state;
    const { navigate } = this.props.navigation;
    const { invalidPass } = this.state;
    const { userFname } = this.state;
    const { userLname } = this.state;
    const { userEmail } = this.state;
    const { userPassword1 } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.pageText}>Create a Bagel Bar Account</Text>
        {(regFail != '') ? <Text style={styles.errorText}>{regFail}</Text> : null}

        <View style={{ alignItems: 'center'}}>
        <TextInput  // First name input field
          autoCorrect={false}
          returnKeyType='done'
          placeholder={ fnamePlace }
          placeholderTextColor={fnamePlaceText}
          style={{paddingHorizontal:7,marginTop:2,width:Dimensions.get('window').width*.93,
          height:Dimensions.get('window').height*.058, borderColor:"gray", borderWidth:2,
          fontSize:Dimensions.get('window').height*.023,marginBottom:15}}	
          underlineColorAndroid="transparent"
          onChangeText = {this.handleFname}  // On event set value for first name
          value = {userFname}
        />
        
        <TextInput  // Last name input field
          autoCorrect={false}
          returnKeyType='done'
          placeholder={ lnamePlace }
          placeholderTextColor={lnamePlaceText}
          style={styles.inField}	
          underlineColorAndroid="transparent"
          onChangeText = {this.handleLname}  // On event set value for last name
          value = {userLname}
        />
        </View>

        <View style={{ alignItems: 'center'}}>
        <TextInput  // Email input field
          autoCorrect={false}
          returnKeyType='done'
          placeholder={ emailPlace }
          placeholderTextColor={emailPlaceText}
          style={{paddingHorizontal:7, width:Dimensions.get('window').width*.93, height:Dimensions.get('window').height*.058,
          marginBottom:4,borderColor:"gray", borderWidth:2,fontSize:Dimensions.get('window').height*.023}}	
          underlineColorAndroid="transparent"
          onChangeText={this.handleEmail} // On event set value for email
          value={userEmail}
        />
        </View>

        <View style={{ alignItems: 'flex-start'}}>
          {(invalidEmail != '') ?  <Text style={styles.errorText}>{invalidEmail}</Text> : null}
        </View>

        <View style={{ alignItems: 'center'}}>
        <TextInput   // Create password input field
          autoCorrect={false}
          returnKeyType='done'
          placeholder={ passPlace }
          placeholderTextColor={passPlaceText}
          style={{paddingHorizontal:7,marginBottom:4,width:Dimensions.get('window').width*.93,
          height:Dimensions.get('window').height*.058,borderColor:"gray", borderWidth:2,
          fontSize:Dimensions.get('window').height*.023, marginTop: 10}}	
          underlineColorAndroid="transparent"
          onChangeText= {this.handlePass} // On event set value for password
          value = {userPassword1}
        />
        </View>

        <View style={{ alignItems: 'flex-start'}}>
          {(invalidPass != '') ? <Text style={styles.errorText}>{invalidPass}</Text> : null}
        </View>

        <View style={{ alignItems: 'center'}}>
        <TouchableOpacity  // Register button
          onPress={this.userRegister}  // When pressed call the userRegister function
          style={{width: Dimensions.get('window').width*.55,height:Dimensions.get('window').height*.065,padding:10,
          justifyContent:'center',backgroundColor:'black',alignItems:'center',marginTop:15}}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
  
        <TouchableOpacity  // Sign in link
          onPress={() => navigate('SignIn')}
          style={{padding:10, alignItems:'center'}}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
        </View>
      </View>
    );  // End return
  }  // End render
}  // End register class component

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'flex-start'
},
inField: {
  paddingHorizontal: 7,
  width: Dimensions.get('window').width*.93,
  height: Dimensions.get('window').height*.058,
  borderColor: 'gray',
  borderWidth: 2,
  fontSize: Dimensions.get('window').height*.023,
  marginBottom: 15
},
pageText: {
  marginTop: Dimensions.get('window').height*.01,
  marginBottom: Dimensions.get('window').height*.02,
  fontWeight: 'bold',
  color: 'gray',
  textAlign: 'center',
  fontSize: Dimensions.get('window').height*.025,
},
buttonText: {
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  fontSize: Dimensions.get('window').height*.021,
},
errorText: {
  color: 'red',
  fontSize: Dimensions.get('window').height*.02,
  marginLeft: Dimensions.get('window').width*.04,
},
link: {
  margin: 7,
  fontWeight: 'bold',
  color: 'gray',
  textAlign: 'center',
  fontSize: Dimensions.get('window').height*.024,
},
});

AppRegistry.registerComponent('register', () => register);