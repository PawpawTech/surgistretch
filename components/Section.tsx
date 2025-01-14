import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor'

import CardComponent from '@/components/CardComponent'
import {
  paletteTealDarkContrast,
  paletteTealDark,
  paletteBlack,
  paletteTealLight
} from '@/constants/Colors'

export function Section({ title, subheading, icon, cards }) {
  return (
    <View style={styles.section}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={icon} size={32} style={{color: paletteTealDarkContrast }} />
        </View>
        <View>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.subheader}>{subheading}</Text>
        </View>
      </View>
      {/* Card Component For Loops */}
      <View style={{ flexDirection: "row", flexWrap: "wrap"}}>
        {cards.map((card, index) =>
          <View key={index}>
            <CardComponent key={index}>
            </CardComponent>
            <Text>{card.title}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center'
  },
  icon: {
    justifyContent: 'center',
    paddingRight: 5
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: paletteBlack
  },
  subheader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: paletteTealDark
  }
})