import { Text, View } from "react-native";
import { Section } from "@/components/Section";

const mockData = [
  {
    "id": 1,
    "title": "Intraoperative",
    "subheading": "micro-breaks during surgery",
    "cards": [
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"}
    ]
  },
  {
    "id": 2,
    "title": "Intra-surgery",
    "subheading": "stretches between surgeries",
    "cards": [
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"}
    ]
  },
  {
    "id": 3,
    "title": "At Home",
    "subheading": "indepth stretching exercises",
    "cards": [
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"},
      {"title": "string", "video": "string"}
    ]
  },
]

export default function Index() {
  return (
    <View>
      {mockData.map(data =>
        <Section
          title={data.title}
          subheading={data.subheading}
          cards={data.cards}
        />
      )}
    </View>
  );
}
