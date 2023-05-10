import * as Yup from 'yup';
import { Box, Button, Divider, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import AnimateButton from '../../components/@extended/AnimateButton';
import { Formik } from 'formik';
import { styled } from '@mui/material/styles';
import React from 'react';
import MainCard from '../../components/MainCard';
import RolesPermissions from './components/roles-permissions';

const AddRole = () => {
    const [checked, setChecked] = React.useState(false);
    const [role, setRole] = React.useState('');

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2)
        }
    }));

    return (
        <>
            <MainCard content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            password: Yup.string().max(255).required('Password is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                            } catch (err) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={3} mb={3}>
                                    <Grid item xs={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="bootstrap">Role Title</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="text"
                                                value={values.email}
                                                name="first_name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="eg. Admin"
                                                fullWidth
                                                error={Boolean(touched.email && errors.email)}
                                            />
                                            {touched.email && errors.email && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {errors.email}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Divider light={true} variant={'fullWidth'} mb={3}>
                                    Permissions Manager
                                </Divider>
                                <Grid container spacing={3} mb={3} p={3}>
                                    <Grid item xs={3}>
                                        <RolesPermissions />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <RolesPermissions />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <RolesPermissions />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <RolesPermissions />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <RolesPermissions />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" justifyContent="center" alignItems="center" mg={3}>
                                    <Grid item xs={6}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Submit
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Box>
            </MainCard>
        </>
    );
};

export default AddRole;
