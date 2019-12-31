import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import BottomTabBarNav from '../navigation/BottomTabBarNav';

export default class TestLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {login: false};
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  login(user) {
    // check login here
    // sent request and check user in server
    let checklogin = true;
    this.setState({login: true});
  }
  render() {
    if (!this.state.login) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={{width: 200, height: 200, marginBottom: 10}}
          />
          <Text>Doan Truong GTVT</Text>
          <TouchableOpacity
            onPress={() => {
              const user = {username: 'test', password: 'test'};
              this.login(user);
            }}
            style={{
              height: 40,
              width: 100,
              borderRadius: 10,
              borderColor: '#4ec3f9',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{color: '#4ec3f9', fontSize: 20, fontWeight: '600'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else return <BottomTabBarNav />;
  }
}
