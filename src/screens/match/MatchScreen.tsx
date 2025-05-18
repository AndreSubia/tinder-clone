import { ActionButton } from '@components/atoms/ActionButton/ActionButton';
import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Text } from '@components/atoms/Text/Text';
import { TextInput } from '@components/molecules/TextInput/TextInput';
import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { getUserById } from 'src/data/users';
import { Toast } from 'toastify-react-native';
import {
  ContentContainer,
  HeaderContainer,
  KeyboardView,
  TextContainer,
} from './styles';

interface MatchScreenProps {
  matchId: string;
}

const MatchScreen = ({ matchId }: MatchScreenProps) => {
  const [message, setMessage] = useState('');
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const router = useRouter();
  const user = getUserById(matchId);

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  const handleSendMessage = () => {
    if (message) {
      Keyboard.dismiss();
      setTimeout(() => {
        setMessage('');
        Toast.success('Mensaje enviado');
      }, 100);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <GradientView>
      <Image
        key={user.id}
        source={user.picture_url}
        contentFit="cover"
        transition={1000}
        style={StyleSheet.absoluteFillObject}
      />
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ContentContainer height={SCREEN_HEIGHT}>
          <HeaderContainer>
            <ActionButton
              iconName="heart"
              backgroundColor={Color.red}
              disabled
            />
            <TextContainer>
              <Text variant="h3">New</Text>
              <Text variant="h1">MATCH!</Text>
              <Text variant="subNavBold">
                ¡También le gustas a {user.name}!
              </Text>
              <Text variant="subNav">Estas más cerca de tener su amistad</Text>
            </TextContainer>
          </HeaderContainer>
          <TextInput
            value={message}
            onChange={(e) => setMessage(e.nativeEvent.text)}
            placeholder="Dile algo agradable"
            onSend={handleSendMessage}
            onEndEditing={handleSendMessage}
          />
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text variant="t2">Regresar a Lecafé</Text>
          </TouchableOpacity>
        </ContentContainer>
      </KeyboardView>
    </GradientView>
  );
};

export default MatchScreen;
