import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { getStatusBarHeight } from 'src/service/helper/CheckIphoneX';
import { TextInput } from 'src/components/textInput/TextInput';

type FormValues = {
  email: string;
  password: string;
};

export default function App() {
  // useForm hook and set default behavior/values
  const { ...methods } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data });

  const [formError, setError] = useState<Boolean>(false)

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <View style={styles.container}>
      {formError ? <View><Text style={{ color: 'red' }}>There was a problem with loading the form. Please try again later.</Text></View> :
        <>
          <FormProvider {...methods}>
            <TextInput
              name="email"
              label="Email"
              placeholder="jon.doe@email.com"
              keyboardType="email-address"
              rules={{
                required: 'Email is required!',
                pattern: {
                  value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                  message: 'Must be formatted: john.doe@email.com',
                },
              }}
              setFormError={setError}
            />
            <TextInput
              name="password"
              label="Password"
              secureTextEntry
              placeholder=""
              rules={{ required: 'Password is required!' }}
              setFormError={setError}
            />
          </FormProvider>
        </>
      }
      <View style={styles.button}>
        <Button
          title="Login"
          color="#fff"
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
    padding: 8,
    backgroundColor: '#0e101c',
  },
});