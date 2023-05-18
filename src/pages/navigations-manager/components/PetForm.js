import { Box, Button, Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import snack from '../../../functions/snack';
import PetIconUploader from './PetIconUploader';
import AnimateButton from '../../../components/@extended/AnimateButton';
import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';

const PetForm = ({ onSubmitForm, loading = false, initialValues = null, initialPetIcon = null }) => {
    const [pet_icon, setPetIcon] = useState(initialPetIcon);

    return (
        <>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                <Formik
                    initialValues={
                        initialValues !== null
                            ? initialValues
                            : {
                                  name: '',
                                  device_no: '',
                                  icon: null,
                                  submit: null
                              }
                    }
                    validationSchema={Yup.object().shape({
                        name: Yup.string().max(255).required('Pet Name is required'),
                        device_no: Yup.string().max(255).required('Device Number is required')
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        if (pet_icon !== null) {
                            values.icon = pet_icon;
                            onSubmitForm(values);
                            return;
                        }
                        snack.error('Pet Icon not uploaded');
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={3} mb={3}>
                                <Grid item xs={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="bootstrap">Pet Name</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="eg. Cat"
                                            fullWidth
                                            error={Boolean(touched.name && errors.name)}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="bootstrap">Device Number</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="text"
                                            value={values.device_no}
                                            name="device_no"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="eg. DEV_0094FGGG"
                                            fullWidth
                                            error={Boolean(touched.device_no && errors.device_no)}
                                        />
                                        {touched.device_no && errors.device_no && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.device_no}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Divider>Pet Icon</Divider>
                            <Grid container spacing={3} mt={3} mb={3} alignItems={'center'} justifyContent={'center'}>
                                <Grid>
                                    <PetIconUploader setPetIcon={setPetIcon} />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center" mg={3}>
                                <Grid item xs={6}>
                                    <AnimateButton>
                                        <LoadingButton
                                            disableElevation
                                            disabled={loading}
                                            loading={loading}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit
                                        </LoadingButton>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default PetForm;
