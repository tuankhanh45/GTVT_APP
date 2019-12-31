import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class DetailsDocumentScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  componentDidMount() {}

  render() {
    let src = 'https://www.utc.edu.vn/';
    return <WebView source={{uri: src}} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
