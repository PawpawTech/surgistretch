import { View, Text } from "react-native";

export function Section() {
  return (
    <View>
      <Text>Section Name</Text>
      {/* Card Component For Loops */}
      <View style={{ flexDirection: "row", flexWrap: "wrap"}}>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
        <Text>Stretch Video</Text>
      </View>
    </View>
  )
}