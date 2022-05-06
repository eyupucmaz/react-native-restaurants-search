import { View, StyleSheet, FlatList } from 'react-native';
import CategoryItem from './category-item';
import { Categories } from './categories';

export default function Category() {
  return (
    <View>
      <FlatList
        data={Categories}
        renderItem={({ item }) => {
          return <CategoryItem name={item.text} imageUrl={item.imageURL} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}
