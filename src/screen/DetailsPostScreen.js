import react, {Component} from 'react';
import {View, Text} from 'react-native';

import cl from '../assets/colors';
import sz from '../assets/size';

export default class DetailsPostScreen extends Component {
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
      <View>
        <Text>Details Post Screen</Text>
      </View>
    );
  }
}