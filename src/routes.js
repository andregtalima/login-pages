import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "./pages/Home"
import { SignUp } from "./pages/SignUp"
import { LogIn } from "./pages/LogIn"

const Stack = createStackNavigator()

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    cardStyle: {
                        backgroundColor: "#8C5CB3"
                    },
                    headerStyle: {
                        backgroundColor: "#CECECE"
                    }
                }}
            />
            <Stack.Screen 
                name="Sign up"
                component={SignUp}
                options={{
                    cardStyle: {
                        backgroundColor: "#8C5CB3",
                        flex: 1
                    },
                    header: {

                    }
                }}
            />
            <Stack.Screen 
                name="Log in"
                component={LogIn}
            />
        </Stack.Navigator>
    )
}