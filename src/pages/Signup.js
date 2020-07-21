import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Signup({ navigation }) {
    const [userNameInput, setUserNameInput] = React.useState('UserName')
    const [passWordInput, setPassWordInput] = React.useState('Password')
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <Text>Sign Up</Text>
            <Text>UserName</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                onChangeText={text => setUserNameInput(text)}
                value={userNameInput}
            />
            <Text>Password</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                onChangeText={text => setPassWordInput(text)}
                value={passWordInput}
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <Text style={styles.button}>LogIn</Text>
            </TouchableOpacity>
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: `yayahyuh`
                })}
            />
            <Text>Hello</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        color: 'white',
        padding: 20,
        borderRadius: 5,
    },
})