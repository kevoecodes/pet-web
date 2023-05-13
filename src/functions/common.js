import { BL_CHARGE_STATUS, BL_STATUS, COMPANY_VERIFICATION_STATUS } from '../utils/constants';
import { Chip } from '@mui/material';
import { Config } from '../utils/Config';
import { getPetListRequest } from '../utils/API';

export const renderDeviceStatus = (status) => {
    console.log('Pet', status === false);
    if (status === true) return <Chip color="success" label="Active" />;
    if (status === false) return <Chip color="error" label="Inactive" />;
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

export const imageServe = (_name) => {
    return `${Config.mediaURL}images/${_name}`;
};

export const getPetsList = (setPets, afterFunc = (e) => {}) => {
    getPetListRequest()
        .then((res) => {
            console.log(res);
            setPets(res.results);
            afterFunc(res.results);
        })
        .catch((err) => {
            console.log(err);
        });
};
