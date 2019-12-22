import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import cl from '../assets/colors/Color';
import sz from '../assets/size/Size';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  // more items
];

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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
    return <ScrollView></ScrollView>;
  }
}
