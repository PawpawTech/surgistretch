import { StyleSheet, View, Text } from "react-native";
import VideoScreen from '@/components/VideoScreen';
import { useLocalSearchParams } from 'expo-router';
import {
  paletteTealDarkContrast,
  paletteTealDark,
  paletteBlack,
  paletteTealLight
} from '@/constants/Colors'

export default function Index() {
  const params = useLocalSearchParams();
  console.log(params)

  return (
    <View>
      <VideoScreen />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.category}>{params.category}</Text>
        <Text style={styles.description}>{params.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
//     flex: 1,
    padding: 10,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: paletteBlack
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    color: paletteTealDark
  },
  description: {
    fontSize: 14,
    paddingTop: 20
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});