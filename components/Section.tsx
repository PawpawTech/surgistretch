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

export function Section({ title, subheading, icon, cards, category }) {
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
      <View style={{ flexDirection: "row", flexWrap: "wrap", maxWidth: 400 }}>
        {cards.map((card, index) =>
          <View style={{ width: "50%", alignItems: "center" }} key={index}>
            <CardComponent key={index} data={{...card, category}}>
            </CardComponent>
            <View style={{ flex: 1, width: 100 }}>
              <Text>{card.title}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
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