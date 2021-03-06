import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import {connect} from "react-redux";
import axios from "axios";

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},

 ]

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
    };
    this.loadMore = this.loadMore.bind(this);
  };
   
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    var slug = "";
    var dataPost = {
        trang: 1,
        status: 'Hot'
    };
   
}
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  loadMore = () =>{
    alert('ok');
  }
  thaydoi = () => {
    alert('vao roi')
    this.props.cap_nhat_posts('mxxmnxmn')
    console.log(this.props.posts.posts)
  }
  _onEndReached = () => {
    alert('work');
  }
  data = (item) => {
   return    <Card
    title='HELLO WORLD'
    image={require('../assets/images/icon.png')}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={{name: 'code'}}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
  </Card>
  
  }
  render() {
    return (
      <FlatList
      refreshing={false}
      style={{flex:1}}
      onRefresh={()=> alert("all")}
      data={users}
      onEndReached={this.data}
      onEndReachedThreshold={0.1}
      renderItem={this.data}
    />
    );
  }

  

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
const mapStateToProps = state => {
  return { items: state }
}

const mapDispatchToProps = dispatch => ({
  cap_nhat_posts: (posts) => dispatch({ type: 'CAP_NHAT_POSTS_HOT_PAGE', posts }),
  VOTE_POST: (data) => dispatch({ type: 'VOTE_POST', changePost: data }),
  modalToggle: () => dispatch({ type: 'MODAL_LOGIN' }),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
