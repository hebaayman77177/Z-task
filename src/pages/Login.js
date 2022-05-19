import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Box, Text, Button } from "../components/general";
import AuthLayout, { AuthFormHeader, TextInputField, TheOtherAuthOption } from "../layouts/authLayout";
import { defaultTheme } from "../theme";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(12, 'Minimum length of the password is 12')
});




const Login = () => {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const { errors, isValid } = formState;


  const history = useHistory()

  const submitHandler = () => {
    history.replace("main")
  }

  return <AuthLayout>
    <AuthFormHeader>Login</AuthFormHeader>
    <TheOtherAuthOption>New to PrimeXBT? <Text color={defaultTheme.colors.primary.main}>Register</Text> </TheOtherAuthOption>
    <form style={{ width: "100%" }}>
      <Box width="100%" mb={["20px"]}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={errors.email ? true : false}
            >
              <TextInputField
                id="email"
                {...field}
                label="Email"
                disableUnderline={true}
                aria-describedby="email-error-text"
              />
              <FormHelperText id="email-error-text">{errors.email?.message}</FormHelperText>
            </FormControl>
          )}
        />
      </Box>
      <Box width="100%" mb={["20px"]}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={errors.password ? true : false} variant="standard">
              <TextInputField
                id="password"
                type="password"
                label="Password"
                {...field}
                autoComplete='new-password'

                disableUnderline={true}
                aria-describedby="password-error-text"
              />
              <FormHelperText id="password-error-text">{errors.password?.message}</FormHelperText>
            </FormControl>
          )}
        />
      </Box>
      <Button
        bg={defaultTheme.colors.primary.main}
        width="100%"
        height="42px"
        border="none"
        fontSize="1rem"
        color={defaultTheme.colors.text.light}
        mb={["20px"]}
      >
        Login
      </Button>
    </form>
  </AuthLayout>
}

export default Login