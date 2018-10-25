import React from 'react';
import axios from 'axios';
import { StyleSheet, 
  TouchableOpacity,
  ActivityIndicator } from 'react-native';
  import Quote from './components/Quote.js';
  import Joke from './components/Joke.js';
  import ImageScreen from './components/ImageScreen.js';
  import ErrorScreen from './components/ErrorScreen.js'
  export default class App extends React.Component {
  
    
    constructor(props) { 
      super(props)
      this.state = {
        showAnimation: true,
        isJoke: false,
        isQuote: false,
        isError: false,
        joke:{},
        quote:{},
        image:{},
        errorMessage: []
      }
      
    }
  
    componentDidMount(){
      this.setComponent();
    }
  
    render() {
      const joke =  <Joke joke={this.state.joke}/>
      const quote = <Quote quote={this.state.quote}/>
      const imageScreen = <ImageScreen image={this.state.image}/>
      const error = <ErrorScreen />
      const showAnimation = this.state.showAnimation;
      let displayItem;
      if( this.state.isJoke){
        displayItem = joke;
      } else if( this.state.isQuote){
        displayItem = quote;
      } else if( this.state.isError){
        displayItem = error;
      } else if( this.state.isImage){
        displayItem = imageScreen;
      }
      return(
        <TouchableOpacity style={styles.container} onPress={this.setComponent}>
        <ActivityIndicator 
          size="large" 
          color="#0000ff" 
          animating={showAnimation}
          hideWhenStopped="true"/>
          {!showAnimation && displayItem}    
        </TouchableOpacity>
      )
    }
  
    setShowAnimation = (showAnimationValue) => {
      this.setState({
        showAnimation: showAnimationValue
      });
    }
  
    setComponent = () => {
      this.setState({
        isJoke: false,
        isQuote: false
      })
      this.decider();
    }
  
    decider = () => {
      const min = 1;
      const max = 100;
      const rand = min + Math.floor(Math.random() * (max - min));
      
      if( rand % 2 === 0){
        this.getQuote();
        this.setState({
          isQuote: true,
          isJoke: false,
          isImage:false,
          isError:false
        });
      } else if( rand % 3 === 0){
        this.getDadJoke();
        this.setState({
          isQuote: false,
          isJoke: true,
          isImage:false,
          isError:false
        });
      } else {
        this.getImage();
        this.setState({
          isQuote: false,
          isJoke: false,
          isImage:true,
          isError:false
        });
      }
    }
  
    getQuote = () => {
      
      this.setShowAnimation(true);
      axios({
          method:'get',
          url:'https://favqs.com/api/qotd',
      }).then( (response) => {
        const quote = {
          quote: response.data.quote.body,
          author: response.data.quote.author,
          source: "https://favqs.com"
        }
        this.setState({
           quote 
        });
        this.setShowAnimation(false);
      }).catch( (error) => {
          console.log("getQuote error " + error);
          this.setState({
            isError: true, 
            isQuote: false,
            isJoke: false,
            isImage:false,
            errorMessage: error
          })
          this.setShowAnimation(false);
      });
    };
  
    getDadJoke = () => {
      this.setShowAnimation(true);
      axios({
        method:'get',
        url:'https://icanhazdadjoke.com/',
        headers: {
          'Accept': 'application/json'
        },
      }).then( (response) => {
          const joke = {
              joke: response.data.joke,
              source: "https://icanhazdadjoke.com"
          }
          this.setState({
              joke
          });
          this.setShowAnimation(false);
        }).catch( (error) => {
          console.log("getDadJoke error " + error);
          this.setState({
            isError: true, 
            isQuote: false,
            isJoke: false,
            isImage:false,
            errorMessage: error
          })
          this.setShowAnimation(false);
        });
    };
  
    getImage = () => {
      
      axios({
        method:'get',
        url: 'https://api.unsplash.com/photos/random?client_id=012eb241a70b56ae53f79665f1bcde203359b2bd4f884f1b427b3181bde15d67',
        headers: {
          'Accept': 'application/json'
        },
      }).then( (response) => {
        
          const image = {
            url : response.data.urls.regular,
            user_name: response.data.user.name,
            description: response.data.description,
            height: response.data.height,
            width: response.data.width,
            profile_image: response.data.user.profile_image.medium,
            source: "https://www.unsplash.com",
            setShowAnimation: this.setShowAnimation
          }
          this.setState({
            image
          });
          this.setShowAnimation(false);
        }).catch( (error) => {
          console.log("getImage error " + error);
          this.setState({
            isError: true, 
            isQuote: false,
            isJoke: false,
            isImage:false,
            errorMessage: error
          })
          this.setShowAnimation(false);
        });
      this.setState({
        isError: false, 
        isQuote: false,
        isJoke: false,
        isImage: true,
      });
    }
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  