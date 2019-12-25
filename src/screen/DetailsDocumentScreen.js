import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
//import Pdf from 'react-native-pdf';

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
    //
  }
  render() {
    const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
    };
    return (
      <View style={styles.container}>
        <Text>DetailsDocumentScreen</Text>
        {/* <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        /> */}
      </View>
    );
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
