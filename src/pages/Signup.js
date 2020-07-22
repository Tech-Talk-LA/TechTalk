import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-community/picker';
// import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box'

export default function Signup({ navigation }) {
    const [pythonBool, setPythonBool] = React.useState(false)

    function checked() {
        console.log('checked')
    }

    return (
        <Formik
            initialValues={formFields}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'center',
                }} >
                    <Text>First Name </Text>
                    <TextInput
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                    />
                    <Text>Last Name </Text>
                    <TextInput
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                    />
                    <Text>Email: </Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
                    />
                    <Text>Hi</Text>
                    <Picker
                        selectedValue={'java'}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => {
                            return;// this.setState({language: itemValue})
                        }
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    {/* <RNPickerSelect
                        placeholder={placeholder}
                        onValueChange={(value) => {
                            console.log(value)
                            handleChange('checkBoxes')
                        }}
                        items={formFields.checkboxes}
                    /> */}
                    {/* <Text>Python</Text> */}
                    {/* <CheckBox ischecked={values.checkboxes.python} onPress={() => values.checkboxes.python} /> */}
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>

    );
}

const placeholder = {
    label: 'Select Language',
    value: "Select Language",
    color: '#9EA0A4',
};



const formFields = {
    firstName: '', userName: '', email: '', Password: '', confirmPassword: '',
    checkboxes: [
        { label: 'Python', Value: 'Python' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'Ruby', value: 'Ruby' },
        { label: 'GoLang', value: 'GoLang' },
        { label: 'C++', value: 'C++' }
    ]
}


const styles = StyleSheet.create({
    view: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    button: {
        backgroundColor: "blue",
        color: 'white',
        padding: 20,
        borderRadius: 5,
    },
})