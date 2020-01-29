import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../components/buttons/RoundedButton'
import colors from '../style/color/index'

const LoggedOut = () => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image 
            style={styles.logo}
            source={require('../assets/logo2.png')}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb Clone with React Native!</Text>
          <RoundedButton 
            text='Click me' 
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookIcon}/>}
          />
          <RoundedButton text="Create Account" textColor={colors.white} />
       
          <TouchableHighlight
            style={styles.moreOptionsButton}
            // onPress={}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
          By tapping Continue, Create Account or More options, I agree to Airbnb's
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}> Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#008388',
    display: 'flex',
    height: '100%'
   
  },
  welcomeWrapper: {
    display: 'flex',
    marginTop: 40,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 40,
    marginBottom: 30
  },
  welcomeText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  facebookIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 10
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30
  },
  termsText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
})

export default LoggedOut
