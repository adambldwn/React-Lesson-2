import React from "react";
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik} from 'formik';

const styles = makeStyles({
  wrapper: {
    marginTop: '5rem',
  }
});

function Signup() {

  const formik = useFormik({
    initialValues: {
      displayName:"",
      email: '',
      password: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const signupStyles = styles();

  console.log(formik)

  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField name="displayName" label="Display Name" variant="outlined" fullWidth value={formik.values.displayName} onChange={formik.handleChange}/>
          </Grid>

          <Grid item xs={12}>
            <TextField name="email" label="Email" variant="outlined" fullWidth value={formik.values.email} onChange={formik.handleChange}/>
          </Grid>

          <Grid item xs={12}>
            <TextField name="password" type="password" label="Password" variant="outlined" fullWidth value={formik.values.password} onChange={formik.handleChange}/>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>SignUp with Google</Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  )
}

export default Signup;