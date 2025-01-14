import { Text, ScrollView } from "react-native";
import { Section } from "@/components/Section";
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical'
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons/faHouseChimneyMedical'

const mockData = [
  {
    "id": 1,
    "title": "Intraoperative",
    "subheading": "micro-breaks during surgery",
    "icon": faUserDoctor,
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
    "icon": faHandHoldingMedical,
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
    "icon": faHouseChimneyMedical,
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
    <ScrollView>
      {mockData.map((data, index) =>
        <Section
          key={index}
          title={data.title}
          subheading={data.subheading}
          icon={data.icon}
          cards={data.cards}
        />
      )}
    </ScrollView>
  );
}
