import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// import cl from '../assets/colors';
// import sz from '../assets/size';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  componentDidMount() {
    // fetch data here
  }
  render() {
    return (
      <View style= {styles.container}>

        <View style= {styles.up}> 
        <Image 
              source = {require('../assets/images/UTC.png')}
              style = {{width: 100, height: 100,marginTop: 50}}
            />
        </View>
        <View style= {styles.down}>
          <View>

          </View>
          <View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: 'cyan'
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textIputContainer: {
    paddingHorizontal: 10,
  },
  textIput: {
    width: 280,
    height: 45,
  },
})