import { View, StyleSheet, FlatList } from 'react-native';
import CategoryItem from './category-item';
import { Categories } from './categories';

export default function Category() {
  return (
    <View>
      <FlatList
        data={Categories}
        renderItem={({ item, index }) => {
          return <CategoryItem key={index} index={index}  name={item.text} imageUrl={item.imageURL} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
        key={Categories.entries()}
      />
    </View>
  );
}
