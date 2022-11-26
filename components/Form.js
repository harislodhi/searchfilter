import React, { useEffect, useState, useContext, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
// import RadioButton from '../components/radio';
import MultiSelect from 'react-native-multiple-select';
// import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';


const itemsend = [{
    id: '92iijs7yta',
    name: 'Photoshop'
}, {
    id: 'a0s0a8ssb',
    name: 'illustrator'
}, {
    id: '16hbajsabsd',
    name: 'adobe xd'
}, {
    id: 'nahs75a5sg',
    name: 'Abobe premier'
},

];


const Form = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    
    const [name, setName] = useState('')
    const [father, setFather] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [pro, setPro] = useState('')

    const [checked, setChecked] = useState(false)
    // state = {
    //     selectedItems : []
    //   };

    const multiref = useRef(null);
    const onSelectedItemsChange = selectedItems => {

        setSelectedItems(selectedItems)
    };
    const [selectedItems, setSelectedItems] = useState([])
    //   const { selectedItems } = this.state;
    return (
        <ScrollView>
            <View style={styles.sectionStyle}>
                <TextInput
                    style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 8 }}
                    value={name}
                    placeholder='Name'
                    placeholderTextColor='white'

                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.sectionStyle}>
                <TextInput
                    style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 8 }}
                    value={father}
                    placeholder='Father Name'
                    placeholderTextColor='white'

                    onChangeText={(text) => setFather(text)}
                />
            </View>
            <View style={styles.sectionStyle}>
                <TextInput
                    style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular', marginTop: 8 }}
                    value={adress}
                    placeholder='Address'
                    placeholderTextColor='white'

                    onChangeText={(text) => setAdress(text)}
                />
            </View>

            <View style={styles.sectionStyle222}>
                <Text style={{ color: 'white', fontSize: 16,}}>Male</Text>
                <CheckBox
                tintColor='#FFFFFF'
                onCheckColor='#FFFFFF'
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ color: 'white', fontSize: 16,}} >Female</Text>
                <CheckBox
                onCheckColor='#FFFFFF'
                tintColor='#FFFFFF'
                boxType='circle'
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={(newValue2) => setToggleCheckBox2(newValue2)}
                />
            </View>

            <View style={styles.radioBtns}>

                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: '400'
                }}>Select Your Profession</Text>

                <MultiSelect

                    items={itemsend}
                    uniqueKey="name"
                    ref={multiref}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    altFontFamily="ProximaNova-Light"
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#CCC"
                    submitButtonText="Submit"
                />
                <View>

                </View>

            </View>
            <TouchableOpacity >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#FF7474', '#E20303']}
                    style={styles.linearGradient} >
                    <Text style={styles.loginButtonText}>
                        Save
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    radioBtns: {
        marginTop: moderateScale(26, 0.1),
        left: moderateScale(17, 0.1),
        marginBottom: 20,

    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        paddingHorizontal: 16,
        marginRight: 40,
        fontSize: 16,
        width: '95%',
        height: 76,

        margin: 10,
    },
    loginButtonText: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#fafafa',
        alignSelf: 'center',
    },
    linearGradient: {


        width: 300,
        paddingVertical: 12,
        borderRadius: 11,
        marginTop: 26,
        alignSelf: 'center',
        height: 48,
    },
    sectionStyle222: {
        alignSelf: "center",
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 4,
        paddingHorizontal: 16,

        fontSize: 13,
        width: '95%',
        height: 76,

        margin: 10,
    },

})

export default Form;