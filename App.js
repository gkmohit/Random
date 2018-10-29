import React from 'react';
import axios from 'axios';
import { StyleSheet, 
  TouchableOpacity,
  ActivityIndicator } from 'react-native';
  import Quote from './components/Quote.js';
  import Joke from './components/Joke.js';
  import ImageScreen from './components/ImageScreen.js';
  import ErrorScreen from './components/ErrorScreen.js'
import Movie from './components/Movie.js';
  export default class App extends React.Component {
  
    
    constructor(props) { 
      super(props)
      this.state = {
        showAnimation: false,
        isJoke: false,
        isQuote: false,
        isError: false,
        isMovie: false,
        joke:{},
        quote:{},
        image:{},
        movie:{},
        errorMessage: ""
      }
      
    }
  
    componentDidMount(){
      this.setComponent();
    }
  
    render() {
      const joke =  <Joke joke={this.state.joke}/>
      const quote = <Quote quote={this.state.quote}/>
      const imageScreen = <ImageScreen image={this.state.image}/>
      const movieScreen = <Movie />
      const error = <ErrorScreen />;
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
      } else if( this.state.isMovie){
        displayItem = movieScreen;
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
      const min = 0;
      const max = 4;
      const rand = this.randomNumber(max, min)
      console.log(rand);
      if( rand === 0){
        this.getQuote();
        this.setState({
          isQuote: true,
          isJoke: false,
          isImage:false,
          isMovie:false,
          isError:false
        });
      } else if( rand  === 1){
        this.getDadJoke();
        this.setState({
          isQuote: false,
          isJoke: true,
          isImage:false,
          isMovie:false,
          isError:false
        });
      } else if( rand  === 2){
        this.getMovie();
        this.setState({
          isQuote: false,
          isJoke: false,
          isImage:false,
          isMovie:true,
          isError:false
        });
      } else  if( rand === 3) {
        this.getImage();
        this.setState({
          isQuote: false,
          isJoke: false,
          isImage:true,
          isMovie:false,
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
            isMovie:false,
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
            isMovie:false,
            errorMessage: error
          })
          this.setShowAnimation(false);
        });
    };
  
    getImage = () => {
      this.setShowAnimation(true);
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
            profile_image: response.data.user.profile_image.large,
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
            isMovie:false,
            errorMessage: error
          })
          console.log(this.state);
          this.setShowAnimation(false);
        });
      this.setState({
        isError: false, 
        isQuote: false,
        isJoke: false,
        isImage: true,
        isMovie: false,
      });
    }
    getMovie = () => {
      this.setShowAnimation(true);
      var max = 1960;
      var min = 2018;
      var year =  this.randomNumber(max, min)
      var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=' + year + '&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=b94d3c1a76fe61936b8b49622936df3a'
      console.log(url);
      axios({
        method:'get',
        url: url,
      }).then( (response) => {
        var length = response.data.results.length;
        console.log(response.data.results[this.randomNumber(length, 0)]);
        this.setShowAnimation(false);
      }).catch( (error) => {
        console.log("getMovie error " + error);
        this.setState({
          isError: true, 
          isQuote: false,
          isJoke: false,
          isImage:false,
          isMovie:false,
          errorMessage: error
        })
        console.log(this.state);
        this.setShowAnimation(false);
      });
      this.setState({
        isError: false, 
        isQuote: false,
        isJoke: false,
        isImage: false,
        isMovie: true,
      });
    }

    randomNumber = (max, min) => {
      return min + Math.floor(Math.random() * (max - min));
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
  