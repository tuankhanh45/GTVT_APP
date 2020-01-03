import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';
import BottomTabBarNav from '../navigation/BottomTabBarNav';

export default class sLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      loadData: false,
      checkInternet: false,
      username: '',
      pass: '',
      gmail: '',
      alert: '',
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
    const {username, pass, gmail} = this.state;
    if (username == '') {
      this.setState({alert: "'Bạn chưa nhập tên đăng nhập'"});
      return false;
    } else if (pass == '') {
      this.setState({alert: "'Bạn chưa nhập mật khẩu'"});
      return false;
    } else if (gmail == '') {
      this.setState({alert: "'Bạn chưa nhập gmail'"});
      return false;
    }

    this.setState({loadData: true});
    setTimeout(() => {
      this.setState({login: true, loadData: false});
    }, 2000);
  }

  render() {
    if (!this.state.login) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={{width: 200, height: 200, marginBottom: 10}}
          />
          <Text style={{color: '#037',fontSize:24}}>Đoàn trường Giao thông vận tải</Text>
          <View style={styles.textInputContainer}>
            <Icon name="user" size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              placeholder="Tên đăng nhập"
            />
          </View>
          <View style={styles.textInputContainer}>
            <Icon name="lock" size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              value={this.state.pass}
              onChangeText={pass => this.setState({pass})}
              placeholder="Mật khẩu"
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.textInputG}>
            <Icon name="envelope" size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.textInputGmail}
              value={this.state.gmail}
              onChangeText={gmail => this.setState({gmail})}
              placeholder="Nhập gmail"
              textContentType="emailAddress"
              keyboardType="email-address"></TextInput>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: 'red',
              alignItems: 'center',
              marginTop: 10,
            }}>
            {' '}
            {this.state.alert}
          </Text>

          <TouchableOpacity
            onPress={() => {
              const user = {
                username: this.state.username,
                password: this.state.pass,
              };
              this.login(user);
            }}
            style={styles.loginButton}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'blue',
    marginTop: 15,
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    paddingLeft: 25,
    borderRadius: 15,
    borderColor: '#4ec3f9',
    borderWidth: 0.8,
  },
  textInputG: {
    marginTop: 20,
    marginLeft: 120,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingLeft: 25,
    borderColor: '#4ec3f9',
    borderWidth: 0.8,
  },
  textInput: {
    width: 250,
    height: 45,
    marginLeft: 10,
  },
  textInputGmail: {
    width: 150,
    height: 40,
    marginLeft: 10,
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    color: '#4ec3f9',
  },
  loginButton: {
    height: 40,
    width: 150,
    borderRadius: 10,
    borderColor: '#4ec3f9',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    margin: 10,
  },
});
