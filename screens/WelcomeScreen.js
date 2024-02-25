import { Button, View, Text } from 'react-native';
import tw from "twrnc"

import { TopAdkar } from "../components/adkar/topAdkar"

export default function WelcomeScreen({navigation}) {
    return (
    <View>
        <Text>Welcome Screen</Text>
        <TopAdkar />
        
      </View>
    );
  }