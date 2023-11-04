/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './SearchStyle';
import SearchData from '../../../data/SearchData/Search.json';
import SearchCard from './components/SearchCard/SearchCard';

const Search = props => {
  const renderSearchCard = ({item}) => {
    return <SearchCard item={item} />;
  };
  const numColumns = 2;

  const handleTextInputPress = () => {
    props.navigation.navigate('Input');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.text}> Search </Text>
        <View style={styles.cameraBox}>
          <Image
            style={styles.camera}
            source={require('../../../assets/images/camera.png')}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.inputBox} onPress={handleTextInputPress}>
        <Image
          style={styles.searchIcon}
          source={require('../../../assets/images/search.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Artist, songs, or podcasts"
          placeholderTextColor="black"
          editable={false}
        />
      </TouchableOpacity>
      <Text style={styles.text1}>Browse all</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={SearchData}
        renderItem={renderSearchCard}
        numColumns={numColumns}
      />
    </View>
  );
};

export default Search;
