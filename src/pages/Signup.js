import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Body, Container, Header, Content, Form, Item, Textarea, Input, Separator, ListItem, CheckBox, Left, Right, Radio } from 'native-base';


export default function Signup({ navigation }) {
    const [nameInput, setNameInput] = React.useState('')
    const [userNameInput, setUserNameInput] = React.useState('')
    const [emailInput, setEmailInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const [confirmPWInput, setConfirmPWInput] = React.useState('')
    const [aboutMe, setAboutMe] = React.useState('')
    const [checkBoxData, setCheckboxData] = React.useState({
        python: false,
        javascript: false,
        ruby: false,
        golang: false,
        cplusplus: false
    })
    const [activeRadio, setActiveRadio] = React.useState('')

    /**
     * @var {Object} apiState object that holds state initialized with setstate
     * this object is used to send to the server/backend
     */
    const apiState = {
        name: nameInput,
        userName: userNameInput,
        email: emailInput,
        password: passwordInput,
        confirmPW: confirmPWInput,
        learnTech: activeRadio,
        about: aboutMe,
        teachTech: checkBoxData,
    }

    /**
     * @function validateForm checks if required input fields are not blank
     * if input fields are blank return false
     * if all one checkbox is false alert to fill a checkbox and return false
     */


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
        if (aboutMe === '') {
            alert('Please tell us about yourself :)')
            return false
        }
        if (activeRadio === '') {
            alert('Please pick a technology you would like to learn');
            return false;
        }
        // if all one checkbox is false alert to fill a checkbox and return false
        const checkBoxFieldValidation = Object.values(checkBoxData).some((languages) => languages)
        console.log(Object.values(checkBoxData))
        if (!checkBoxFieldValidation) {
            alert(`Please select a language`)
            return false
        }
        return true;
    }

    /**
     * @function apiCall checks if validatform returns true, if it is send a get request to the backend
     */
    function apiCall() {
        console.log(apiState)
        if (validateForm()) {
            alert('Signup Successful!')
            navigation.navigate('Log in')
        }
        console.log(apiState)
    }

    const listItems = Object.keys(checkBoxData).map((listItem, i) =>  //list item: python javascript etc
        <ListItem>
            <CheckBox
                key={i} onPress={() => listItem ? setCheckboxData({ ...checkBoxData, python: false }) : setCheckboxData({ ...checkBoxData, python: true })}
                checked={listItem}
            />
            <Body>
                <Text> {listItem}</Text>
            </Body>
        </ListItem>
    )
    /**
     * Jsx Components are from native base library see {@link https://docs.nativebase.io/} 
     */
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
                    <ListItem onPress={() => {
                        setActiveRadio('python')
                    }} >
                        <Left>
                            <Text>Python</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={activeRadio === 'python'}
                            />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => {
                        setActiveRadio('javascript')
                    }} >
                        <Left>
                            <Text>Javascript</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={activeRadio === 'javascript'}
                            />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => {
                        setActiveRadio('ruby')
                    }} >
                        <Left>
                            <Text>Ruby</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={activeRadio === 'ruby'}
                            />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => {
                        setActiveRadio('golang')
                    }} >
                        <Left>
                            <Text>Golang</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={activeRadio === 'golang'}
                            />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => setActiveRadio('cplusplus')} >
                        <Left>
                            <Text>C++</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={activeRadio === 'cplusplus'}
                            />
                        </Right>
                    </ListItem>

                    <Separator>
                        <Text>What languages can you teach?</Text>
                    </Separator>
                    {/* {listItems} */}
                    <ListItem
                        onPress={() => checkBoxData.python ? setCheckboxData({ ...checkBoxData, python: false }) : setCheckboxData({ ...checkBoxData, python: true })}
                    >
                        <CheckBox
                            checked={checkBoxData.python}
                        />
                        <Body>
                            <Text> Python</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => checkBoxData.javascript ? setCheckboxData({ ...checkBoxData, javascript: false }) : setCheckboxData({ ...checkBoxData, javascript: true })}
                    >
                        <CheckBox
                            checked={checkBoxData.javascript}
                        />
                        <Body>
                            <Text> Javascript</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => checkBoxData.ruby ? setCheckboxData({ ...checkBoxData, ruby: false }) : setCheckboxData({ ...checkBoxData, ruby: true })}
                    >
                        <CheckBox

                            checked={checkBoxData.ruby}
                        />
                        <Body>
                            <Text> Ruby</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => checkBoxData.golang ? setCheckboxData({ ...checkBoxData, golang: false }) : setCheckboxData({ ...checkBoxData, golang: true })}
                    >
                        <CheckBox

                            checked={checkBoxData.golang}
                        />
                        <Body>
                            <Text> GoLang</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => checkBoxData.cplusplus ? setCheckboxData({ ...checkBoxData, cplusplus: false }) : setCheckboxData({ ...checkBoxData, cplusplus: true })}
                    >
                        <CheckBox

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