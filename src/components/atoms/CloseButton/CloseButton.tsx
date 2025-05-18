import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import React from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';

interface CloseButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function CloseButton({ onPress, style }: CloseButtonProps) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Ionicons name="close" size={30} color={Color.white} />
    </Pressable>
  );
}
