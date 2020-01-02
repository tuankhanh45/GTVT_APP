import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import BottomTabBarNav from '../navigation/BottomTabBarNav';

export default class TestLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loadData: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  componentDidMount() {
    this.CheckConnectivity();
  }
  CheckConnectivity() {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (!state.isConnected)
        alert(
          'No internet connected! please check your network and try again!',
        );
      // else alert('Internet connected');
    });
  }

  login(user) {
    // check login here
    // sent request and check user in server
    this.setState({loadData: true});
    setTimeout(() => {
      this.setState({login: true, loadData: false});
    }, 1500);
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
          <Text>Đoàn trường giao thông vận tải</Text>
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
              margin: 10,
            }}>
            <Text style={{color: '#4ec3f9', fontSize: 20, fontWeight: '600'}}>
              Login
            </Text>
          </TouchableOpacity>
          {this.state.loadData && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </View>
      );
    } else return <BottomTabBarNav />;
  }
}
