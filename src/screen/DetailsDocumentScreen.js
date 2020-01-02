import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import FileViewer from 'react-native-file-viewer';

// import cl from '../assets/colors/Color';
// import sz from '../assets/size/Size';

export default class DetailsDocumentScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  componentDidMount() {
    // const path = '../assets/doc/pdf.pdf'; // absolute-path-to-my-local-file.
    // FileViewer.open(path)
    //   .then((data) => {
    //     // success
    //   })
    //   .catch(error => {
    //     // error
    //   });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hello  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, marginTop: 20},
});
