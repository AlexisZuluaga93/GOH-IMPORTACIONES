import React from 'react';
import { Input, Icon, Text } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress: () => void;
  loading:boolean;

}


export const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title,color }) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:color}]} onPress={onPress}>
      <View>
        <Text>{title}</Text> 
      </View>
    </TouchableOpacity>
  );
};
