import { NavigationContainer } from '@react-navigation/native'
import { Home } from './src/components/Home'
import { SignUp } from './src/components/SignUp'
import { LogIn } from './src/components/LogIn'

export default function App(){
  return(
    <NavigationContainer>
      <Home />
      <SignUp />
      <LogIn />
    </NavigationContainer>
  )
}

