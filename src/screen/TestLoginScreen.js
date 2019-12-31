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

import NetInfo from "@react-native-community/netinfo";
import BottomTabBarNav from '../navigation/BottomTabBarNav';

export default class TestLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loadData: false,
      checkInternet: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  componentDidMount() {
    //this.CheckConnectivity();
  }
  // CheckConnectivity() {
  //   // For Android devices
  //   if (Platform.OS === 'android') {
  //     NetInfo.fetch.then(isConnected => {
  //       if (isConnected) {
  //         this.setState({checkInternet: true});
  //         alert('yes internet');
  //       } else {
  //         this.setState({checkInternet: false});
  //         alert('no internet');
  //       }
  //     });
  //   } else {
  //     // For iOS devices
  //     NetInfo.addEventListener(
  //       'connectionChange',
  //       this.handleFirstConnectivityChange,
  //     );
  //   }
  // }

  // handleFirstConnectivityChange = isConnected => {
  //   NetInfo.isConnected.removeEventListener(
  //     'connectionChange',
  //     this.handleFirstConnectivityChange,
  //   );

  //   if (isConnected === false) {
  //     Alert.alert('You are offline!');
  //   } else {
  //     Alert.alert('You are online!');
  //   }
  // };

  login(user) {
    // check login here
    // sent request and check user in server
    this.setState({loadData: true});
    setTimeout(() => {
      this.setState({login: true, loadData: false});
    }, 2000);
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
