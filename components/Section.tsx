import { View, Text } from "react-native";

export function Section({ title, subheading, cards }) {
  return (
    <View>
      <Text>{title}</Text>
      {/* Card Component For Loops */}
      <View style={{ flexDirection: "row", flexWrap: "wrap"}}>
        {cards.map(card =>
          <Text>{card.title}</Text>
        )}
      </View>
    </View>
  )
}