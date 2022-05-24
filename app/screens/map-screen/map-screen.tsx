import { StackNavigationProp } from "@react-navigation/stack"
import * as React from "react"
// eslint-disable-next-line react-native/split-platform-components
import { Screen } from "../../components/screen"
import { PrimaryStackParamList } from "../../navigation/stack-param-lists"
import { ScreenType } from "../../types/jsx"
import { Merchants } from 'react-native-galoy-merchant';

type Props = {
  navigation: StackNavigationProp<PrimaryStackParamList, "Map">
}

export const MapScreen: ScreenType = ({ navigation }: Props) => {
  return (
    <Screen>
      <Merchants />
    </Screen>
  )
}
