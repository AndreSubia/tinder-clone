import { ActionButton } from '@components/atoms/ActionButton/ActionButton';
import { Color } from '@styles/colors';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { ModalContainer, ToggleButtonContainer } from './styles';

interface ExpandableModalProps {
  children: ReactNode;
  floatingHeader?: ReactNode;
  compressedHeight?: number;
  expandedHeight?: number;
  backgroundColor?: string;
  onHeightChange?: (height: number) => void;
}

export const Modal = ({
  children,
  floatingHeader,
  compressedHeight = 200,
  expandedHeight = 400,
  backgroundColor = Color.white,
  onHeightChange,
}: ExpandableModalProps) => {
  const [expanded, setExpanded] = useState(false);
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const heightValue = useSharedValue(compressedHeight);

  const animatedStyle = useAnimatedStyle(() => {
    if (onHeightChange) {
      runOnJS(onHeightChange)(heightValue.value);
    }

    return {
      height: heightValue.value,
    };
  });

  const toggleExpand = () => {
    heightValue.value = withSpring(
      expanded ? compressedHeight : expandedHeight,
      {
        damping: 15,
        stiffness: 100,
      },
    );
    setExpanded(!expanded);
  };

  return (
    <ModalContainer width={SCREEN_WIDTH}>
      <Animated.View
        style={{
          marginBottom: 8,
        }}
      >
        {floatingHeader}
      </Animated.View>
      <Animated.View
        style={[
          {
            width: SCREEN_WIDTH,
            backgroundColor: backgroundColor,
            borderTopLeftRadius: 50,
            zIndex: 999,
          },
          animatedStyle,
        ]}
      >
        <ToggleButtonContainer>
          <ActionButton
            backgroundColor={Color.deepPink}
            backgroundColorEnd={Color.coral}
            onPress={toggleExpand}
            size={40}
            iconSize={30}
            iconName={expanded ? 'chevron-down' : 'chevron-up'}
          />
        </ToggleButtonContainer>
        {children}
      </Animated.View>
    </ModalContainer>
  );
};
