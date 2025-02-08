import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button } from 'react-native';
import { getVideoMP4 } from '@/services/assetService';

export default function VideoScreen({ title }) {
  const videoSource = getVideoMP4(title);
  const player = useVideoPlayer({ assetId: videoSource }, player => {
    player.loop = false;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
//     flex: 1,
//     padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
//     paddingHorizontal: 50,
  },
  video: {
    width: '100%',
    height: 235,
  },
  controlsContainer: {
    padding: 10,
  },
});
