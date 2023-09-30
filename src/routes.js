import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const Routes = () => {
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    title: "Welcome To Shh!",
                    cardShadowEnabled: true
                }}
            />
            <Stack.Screen 
                name="Sign up"
                component={SignUp}
                options={{
                    title: "Sign up To Shh!",
                    cardShadowEnabled: true
                }}
            />
            <Stack.Screen 
                name="Log in"
                component={LogIn}
                options={{
                    title: "Log in To Shh!",
                    cardShadowEnabled: true
                }}
            />
        </Stack.Navigator>
    )
}

export default Routes