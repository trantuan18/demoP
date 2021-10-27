// components/TextInput.tsx
import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet
} from 'react-native';
/* IMPORT HOOKS AND PROPS TYPES */
import {
  useController,
  useFormContext,
  ControllerProps,
  UseControllerProps
} from 'react-hook-form';

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string
  defaultValue?: string //ADD DEFAULT VALUE TO PROPS
}

export const TextInput = (props: TextInputProps) => {

  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();
  const { ...methods } = formContext

  const {
    label,
    name,
    rules,
    defaultValue,
    ...inputProps
  } = props;

  if (!formContext || !name) {
    const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
    console.error(msg)
    return null
  }

  const { field } = useController({ name, rules, defaultValue });

  return (
    <View style={styles.container}>
      {label && (<Text style={styles.label}>{label}</Text>)}
      <View style={styles.inputContainer}>
        <RNTextInput
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    borderColor: 'white',
    borderWidth: 1
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  inputContainer: {

  }
});