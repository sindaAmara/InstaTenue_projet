import { View, Text, StyleSheet } from 'react-native'

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Tenues</Text>
      {/* OutfitGrid viendra ici */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf6f0', padding: 20 },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 32, color: '#3d1a2e', marginTop: 60,
  },
})

