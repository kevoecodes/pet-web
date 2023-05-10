import { BL_CHARGE_STATUS, BL_STATUS, COMPANY_VERIFICATION_STATUS } from '../utils/constants';
import { Chip } from '@mui/material';
import { getRolesRequest } from '../utils/API';

export const renderCompanyVerificationStatus = (status, include = false) => {
    // const pre = `${include ? 'Verification'}`
    if (status === COMPANY_VERIFICATION_STATUS.PENDING) return <Chip color="primary">Pending</Chip>;
    if (status === COMPANY_VERIFICATION_STATUS.VERIFIED) return <Chip color="success">Verified</Chip>;
    if (status === COMPANY_VERIFICATION_STATUS.REJECTED) return <Chip color="error">Rejected</Chip>;
};

export const renderBillOfLoadingStatus = (status, include = false) => {
    // const pre = `${include ? 'Verification'}`
    if (status === BL_STATUS.PENDING) return <Chip color="secondary" label={'Pending'} />;
    else if (status === BL_STATUS.ONPROGRESS) return <Chip color="primary" label="On Progress" />;
    else if (status === BL_STATUS.COMPLETE) return <Chip color="success" label="Complete" />;
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

export const getRoleOptions = (setRoleOptions) => {
    getRolesRequest()
        .then((res) => {
            console.log(res);
            setRoleOptions(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const currencyFormatter = (_amount) => {
    const formattedAmount = _amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return formattedAmount;
};
