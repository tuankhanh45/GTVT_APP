import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default class DetailsDocumentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  hideSpinner() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    let url = 'https://www.utc.edu.vn/';
    return (
      <View style={styles.container}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={styles.webview}
          source={{uri: url}}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="#00ff00"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2,
    top: Dimensions.get('window').height / 2 - 10,
  },
});
