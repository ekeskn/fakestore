import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import Error from '../../components/Error'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';

const Products = () => {

  const {error,loading, data} = useFetch(Config.API_URL)

  const renderProduct = ({item}) => {    
    return (
      <View>

    <Text> Producs</Text>
    <ProductCard product={item} />
      </View>
    )
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error/>;
  }
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
