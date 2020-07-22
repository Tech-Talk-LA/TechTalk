import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Body, Container, Header, Content, Form, Item, Picker, Textarea, Input, Separator, ListItem, CheckBox } from 'native-base';
// import { Formik } from 'formik';
// import RNPickerSelect from 'react-native-picker-select';
// import CheckBox from 'react-native-check-box'

export default function Signup({ navigation }) {
    const [nameInput, setNameInput] = React.useState('')
    const [userNameInput, setUserNameInput] = React.useState('')
    const [emailInput, setEmailInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const [confirmPWInput, setConfirmPWInput] = React.useState('')
    const [pickTech, setPickTech] = React.useState('Python')
    const [aboutMe, setAboutMe] = React.useState('')
    const [checkBoxData, setCheckboxData] = React.useState({
        python: false,
        javascript: false,
        ruby: false,
        golang: false,
        cplusplus: false
    })


    const apiState = {
        name: nameInput,
        userName: userNameInput,
        email: emailInput,
        password: passwordInput,
        confirmPW: confirmPWInput,
        pickTech: pickTech,
        about: aboutMe,
        toTeachCheckboxes: checkBoxData
    }

    //  


    function validateForm() {
        if (nameInput === '') {
            alert(`Please enter Your Name`);
            return false;
        }
        if (userNameInput === '') {
            alert(`Please enter Your UserName`);
            return false;
        }
        if (emailInput === '') {
            alert(`Please enter Your Email`);
            return false;
        }
        if (passwordInput === '') {
            alert(`Please enter Your Password`);
            return false;
        }
        if (confirmPWInput === '') {
            alert(`Please confirm Your Password`)
            return false;
        }
        if (passwordInput !== confirmPWInput) {
            alert(`Your Passwords don't match`)
            return false;
        }
        // if all checkboxes are false alert to fill a ccheckbox and return false
        const checkBoxFieldValidation = Object.values(checkBoxData).some((languages) => languages)
        console.log(Object.values(checkBoxData))
        if (!checkBoxFieldValidation) {
            alert(`Please select a language`)
            return false
        }
        return true;
    }

    function apiCall() {
        console.log(apiState)
        if (validateForm()) alert('Signup Successful!')
        console.log(apiState)
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Separator>
                        <Text>Personal Info</Text>
                    </Separator>
                    <Item>
                        <Input onChangeText={text => setNameInput(text)} value={nameInput} placeholder="Name" />
                    </Item>
                    <Item >
                        <Input onChangeText={text => setUserNameInput(text)} value={userNameInput} placeholder="UserName" />
                    </Item>
                    <Item >
                        <Input onChangeText={text => setEmailInput(text)} value={emailInput} placeholder="Email" />
                    </Item>
                    <Item >
                        <Input onChangeText={text => setPasswordInput(text)} value={passwordInput} placeholder="Password" secureTextEntry={true} />
                    </Item>
                    <Item last>
                        <Input onChangeText={text => setConfirmPWInput(text)} value={confirmPWInput} placeholder="Confirm Password" secureTextEntry={true} />
                    </Item>
                    <Separator>
                        <Text>What Language would you like to learn?</Text>
                    </Separator>
                    <Picker
                        mode="dialog"
                        style={{ width: undefined }}
                        placeholder="Select your Language"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={pickTech}
                        onValueChange={value => setPickTech(value)}
                    >
                        <Picker.Item label="Python" value="Python" />
                        <Picker.Item label="Javascript" value="Javascript" />
                        <Picker.Item label="Ruby" value="Ruby" />
                        <Picker.Item label="GoLang" value="GoLang" />
                        <Picker.Item label="C++" value="C++" />
                    </Picker>
                    <Separator>
                        <Text>What Languages do you Know?</Text>
                    </Separator>
                    <ListItem>
                        <CheckBox
                            onPress={() => checkBoxData.python ? setCheckboxData({ ...checkBoxData, python: false }) : setCheckboxData({ ...checkBoxData, python: true })}
                            checked={checkBoxData.python}
                        />
                        <Body>
                            <Text> Python</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            onPress={() => checkBoxData.javascript ? setCheckboxData({ ...checkBoxData, javascript: false }) : setCheckboxData({ ...checkBoxData, javascript: true })}
                            checked={checkBoxData.javascript}
                        />
                        <Body>
                            <Text> Javascript</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            onPress={() => checkBoxData.ruby ? setCheckboxData({ ...checkBoxData, ruby: false }) : setCheckboxData({ ...checkBoxData, ruby: true })}
                            checked={checkBoxData.ruby}
                        />
                        <Body>
                            <Text> Ruby</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            onPress={() => checkBoxData.golang ? setCheckboxData({ ...checkBoxData, golang: false }) : setCheckboxData({ ...checkBoxData, golang: true })}
                            checked={checkBoxData.golang}
                        />
                        <Body>
                            <Text> GoLang</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            onPress={() => checkBoxData.cplusplus ? setCheckboxData({ ...checkBoxData, cplusplus: false }) : setCheckboxData({ ...checkBoxData, cplusplus: true })}
                            checked={checkBoxData.cplusplus}
                        />
                        <Body>
                            <Text> C++</Text>
                        </Body>
                    </ListItem>
                    <Separator>
                        <Text>Tell us about yourself</Text>
                    </Separator>
                    <Textarea onChangeText={text => setAboutMe(text)} value={aboutMe} rowSpan={5} placeholder="Type here..." />
                </Form>
                <Button full info
                    action="Submit"
                    onPress={apiCall}
                >
                    <Text>Submit</Text>
                </Button>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    button: {
        backgroundColor: "blue",
        color: '#000',
        padding: 20,
        borderRadius: 5,
    },
})