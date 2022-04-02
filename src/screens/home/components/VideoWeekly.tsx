import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {Assets, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import Video from 'react-native-video';

const uri =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const VideoWeekly = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  return (
    <View height={188} marginH-24>
      {loading && (
        <View flex center>
          <ActivityIndicator color={'#FFF'} />
          <Text r12 white marginT-4>
            Loading
          </Text>
        </View>
      )}
      {error && (
        <View flex center>
          <Text r12 white marginT-4>
            404 Error video
          </Text>
        </View>
      )}

      <Video
        source={{
          uri: uri,
        }}
        style={styles.video}
        onError={error => {
          console.log('error video', error);
          if (error) {
            setError(true);
            setLoading(false);
          }
        }}
        controls={true}
        onReadyForDisplay={() => {
          setLoading(false);
        }}
        paused={!play}
      />
      <View flex center style={styles.video}>
        <TouchableOpacity
          onPress={() => {
            setPlay(!play);
          }}>
          <Image source={Assets.icons.play} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoWeekly;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
