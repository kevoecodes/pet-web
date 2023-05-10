import axios from 'axios';
import { Config } from './Config';
// import {message} from "antd";
// import {EDIT_POS_TYPE} from "./constants";
import { snackbarRef } from '../App';
// import { setAuthToken } from '../features/userSlice'
// import { useDispatch } from 'react-redux'

function performRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .post(Config.apiURL + method, payload)
            .then((response) => {
                if ('x-refreshed-token' in response.headers) {
                    // useDispatch(setAuthToken(response.headers['x-refreshed-token']))
                }
                resolve(response.data);
            })
            .catch((error) => {
                if (!error.response) {
                    // message.error('No network available, Please Connect to a Network!').then();
                } else if (error.response.status === 401) {
                    // store && logOut(store.dispatch);
                    // enqueueSnackbar('Error occured', {variant: 'warning'});
                    // snackbarRef.enqueueSnackbar(error.response.data, {variant: 'error'})
                } else if (error.response.status === 400) {
                    // store && logOut(store.dispatch);
                    // enqueueSnackbar('Error occured', {variant: 'warning'}
                    // console.log(error.response.data)
                    // message.error(error.response.data, 5).then();
                    // snackbarRef.enqueueSnackbar(error.response.data, {variant: 'error'})
                } else if (error.response.status === 500) {
                } else if (error.response && error.response.status === 429) {
                    // if (snackbarRef) {
                    // //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
                    // }
                } else {
                    // store && logOut(store.dispatch);
                    // enqueueSnackbar('Error occured', {variant: 'warning'}
                    console.log('Error occurred, status: ' + error.response.status);
                    // snackbarRef.enqueueSnackbar("Unknown error", {variant: 'error'})
                    // return
                }
                console.log(error);
                reject(error);
            });
    });
}

function performAuthenticatedGetRequest(method, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .get(Config.apiURL + method, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (!error.response) {
                    if (snackbarRef) {
                        snackbarRef.enqueueSnackbar('No network available, Please Connect to a Network!', { variant: 'warning' });
                    }
                } else if (error.response && error.response.status === 401 && authenticated && !isLogoutRequest) {
                    // store && logOut(store.dispatch);
                    // return
                } else if (error.response && error.response.status === 429) {
                    // if (snackbarRef) {
                    //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
                    // }
                }
                reject(error);
            });
    });
}

function performAuthenticatedPostRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .post(Config.apiURL + method, payload, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401 && authenticated && !isLogoutRequest) {
                    // store && logOut(store.dispatch);
                    return;
                }
                if (error.response && error.response.status === 429) {
                    // if (snackbarRef) {
                    //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
                    // }
                }
                reject(error);
            });
    });
}

function performAuthenticatedPutRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .put(Config.apiURL + method, payload, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401 && authenticated && !isLogoutRequest) {
                    // store && logOut(store.dispatch);
                    return;
                }
                if (error.response && error.response.status === 429) {
                    // if (snackbarRef) {
                    //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
                    // }
                }
                reject(error);
            });
    });
}

function performAuthenticatedDeleteRequest(method, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .delete(Config.apiURL + method, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401 && authenticated && !isLogoutRequest) {
                    // store && logOut(store.dispatch);
                    return;
                }
                if (error.response && error.response.status === 429) {
                    // if (snackbarRef) {
                    //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
                    // }
                }
                reject(error);
            });
    });
}

export function loginRequest(email, password, rememberMe = false, mfaCode = '') {
    const additional = {};
    if (mfaCode !== '') {
        additional.mfaCode = mfaCode;
    }
    return performRequest(
        'api/auth/login',
        {
            email: email,
            password: password
        },
        false
    );
}

export function resetPasswordRequest(password, confirm_password, user_id, rememberMe = false, mfaCode = '') {
    const additional = {};
    if (mfaCode !== '') {
        additional.mfaCode = mfaCode;
    }
    return performAuthenticatedPostRequest(
        'api/auth/reset-password/' + user_id,
        {
            password: password,
            confirm_password: confirm_password
        },
        false
    );
}

// User Request Resources

export function getUserListRequest() {
    return performAuthenticatedGetRequest('api/v1/users-list/');
}

export function registerUserRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/register-user', payload);
}

export function getUserByIDRequest(id) {
    return performAuthenticatedGetRequest('api/v1/user/' + id);
}

export function editUserRequest(id, payload) {
    return performAuthenticatedPutRequest('api/v1/user/' + id, payload);
}

// Role Request Resources
export function getRolesRequest() {
    return performAuthenticatedGetRequest('api/v1/roles');
}

// BL Request Resources
export function createBLRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/bls', payload);
}

export function getBlsRequest() {
    return performAuthenticatedGetRequest('api/v1/bls-list/');
}

export function getBlByIdRequest(id, include_charges = false, include_timeline = false) {
    const queryParameters = [include_charges ? `include_charges=${'true'}` : '', include_timeline ? `include_timeline=${'true'}` : '']
        .filter(Boolean)
        .join('&');

    const method = `api/v1/bl/${id}${queryParameters ? `?${queryParameters}` : ''}`;
    return performAuthenticatedGetRequest(method);
}

export function getBlAttachmentsRequest(id) {
    return performAuthenticatedGetRequest('api/v1/bl-attachments?bl_id=' + id);
}

export function getChargesRequest() {
    return performAuthenticatedGetRequest('api/v1/charges-list/');
}

export function getBlChargesRequest() {
    return performAuthenticatedGetRequest('api/v1/bl-charges-list/');
}

export function createBLChargeRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/bl-charges', payload);
}

export function getBlChargeByIdRequest(id) {
    return performAuthenticatedGetRequest('api/v1/bl-charge/' + id);
}

export function updateBlChargeRequest(id, payload) {
    return performAuthenticatedPutRequest('api/v1/bl-charge/' + id, payload);
}

export function getBlChargeAttachmentRequest(id) {
    return performAuthenticatedGetRequest('api/v1/bl-charge-attachments?bl_charge_id=' + id);
}

// Voucher Request Resources
export function createVoucherRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/vouchers', payload);
}

export function getVouchersRequest() {
    return performAuthenticatedGetRequest('api/v1/vouchers-list/');
}

export function getVoucherByIdRequest(id) {
    return performAuthenticatedGetRequest('api/v1/voucher/' + id);
}
export function updateVoucherRequest(id, payload) {
    return performAuthenticatedPutRequest('api/v1/voucher/' + id, payload);
}

export function getVoucherAttachmentsRequest(id) {
    return performAuthenticatedGetRequest('api/v1/voucher-attachments?voucher_id=' + id);
}
