import React from 'react'
import propTypes from 'prop-types'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import colors from '../../style/color'


const RoundedButton = (props) => {
  const { icon, text, textColor, background } = props
  const backgroundColor = background || 'transparent'
  const color = textColor || colors.black
  return (
    <TouchableHighlight style={{ ...styles.wrapper, backgroundColor }}>
      <View style={styles.ButtonTextWrapper}>
        {icon}
        <Text style={{ ...styles.buttonText, color }}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}
RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  background: propTypes.string
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: 'flex',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: 'center'
  },
  ButtonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center'
  },
  facebookIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  }
})

export default RoundedButton
