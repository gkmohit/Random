import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';
import Title from './Title';
import Source from './Source';
import PictureInfo from './PictureInfo';


const IMAGE_TITLE = "Image";
const FONT_AWESOME_ICON = "image";
export default class ImageScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const url = "\'" + this.props.image.url + "\'";
        const source = this.props.image.source;
        const userName = this.props.image.user_name;
        const description = this.props.image.description;
        const profileImage = this.props.image.profile_image;
        const setShowAnimation = this.props.image.setShowAnimation;
        
        return (
            <View style={styles.container}>
                <Title 
                    title={IMAGE_TITLE} 
                    fontAwesomeIcon={FONT_AWESOME_ICON} 
                    style={styles.titleStyle}
                />
                <Image
                    style={styles.image}
                    source={{uri: this.props.image.url}}
                />
                <PictureInfo 
                    profileImage={profileImage}
                    description={description}
                    userName={userName}
                />
                <Source source={source} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
    },

    titleStyle:{
        flex: 2,
    },

    image: {
        flex:3,
        width: Dimensions.get('window').width - 10,
        height: 400,
        alignSelf: 'center',
    },

    avatarAndTextStyle :{
        flex:1,
        flexDirection: 'row',
        alignSelf: "center",
        justifyContent: "space-between"
    },

    avatarStyle:{
        flex:2,
    },

    descriptionAndNameStyle : {
        flex:1,
        flexDirection: 'column',
    },

    descriptionTextStyle : { 
        color: "#FFF",
        fontSize: 25,
        textAlign: "left"
    },

    userNameTextStyle : {
        flex:1,
        color: "#FFF",
        fontSize: 15,
        textAlign: "left"
    } ,
    

  });


  ImageScreen.propTypes = {
    url: PropTypes.string,
    description: PropTypes.string,
    userName: PropTypes.string,
    
}
