import { View, Text, StyleSheet, Image } from 'react-native';
import { elevation } from './common/styles';

export default function CategoryItem({ name, imageUrl }) {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginLeft: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation,
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  image: {
    width: 35,
    height: 35,
  },
  header: {
    fontWeight: '600',
  },
});
