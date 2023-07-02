import { BL_CHARGE_STATUS, BL_STATUS, COMPANY_VERIFICATION_STATUS } from '../utils/constants';
import { Chip } from '@mui/material';
import { Config } from '../utils/Config';
import { getPetListRequest } from '../utils/API';

const colors = ['#ff0707', '#ffdd00', '#99f600', '#ff00dd', '#00ffde', '#07968a'];

export const renderDeviceStatus = (status) => {
    console.log('Pet', status === false);
    if (status === true) return <Chip color="success" label="Active" />;
    if (status === false) return <Chip color="error" label="Inactive" />;
};

export const renderRole = (status) => {
    if (status === 0) return <Chip color="primary" label="Admin" />;
    if (status === 1) return <Chip color="success" label="User" />;
};

export const renderBlChargeStatus = (status, include = false) => {
    // const pre = `${include ? 'Verification'}`
    if (status === BL_CHARGE_STATUS.PENDING) return <Chip color="secondary" label={'Pending'} />;
    else if (status === BL_CHARGE_STATUS.VERIFIED) return <Chip color="warning" label="Verified" />;
    else if (status === BL_CHARGE_STATUS.APPROVED) return <Chip color="success" label="Approved" />;
    else if (status === BL_CHARGE_STATUS.PAID) return <Chip color="primary" label="Paid" />;
    else if (status === BL_CHARGE_STATUS.REJECTED) return <Chip color="error" label="Rejected" />;
};

export const renderDateTime = (datetimestring) => {
    const dateTime = new Date(datetimestring);
    return dateTime.toLocaleString();
};

export const currencyFormatter = (_amount) => {
    const formattedAmount = _amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return formattedAmount;
};

export const imageServe = (_name, image_type = 'normal') => {
    return `${Config.mediaURL}images/${_name}?image_type=${image_type}`;
};

export const getPetsList = (setPets, afterFunc = (e) => {}) => {
    getPetListRequest()
        .then((res) => {
            console.log(res);
            const results = res.results.map((item, idx) => ({ ...item, color: colors[idx] }));
            setPets(results);
            afterFunc(results);
        })
        .catch((err) => {
            console.log(err);
        });
};
