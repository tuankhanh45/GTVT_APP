import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import {WebView} from 'react-native-webview';

// import cl from '../assets/colors/Color';
// import sz from '../assets/size/Size';

export default class DetailsDocumentScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    // return {
    //   header: null,
    // };
  };

  componentDidMount() {
    //
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, marginTop: 20},
});
