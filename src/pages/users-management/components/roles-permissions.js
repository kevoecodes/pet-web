import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RolesPermissions() {
    const [checked, setChecked] = React.useState([false, false, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel label="Create User" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
            <FormControlLabel label="Edit User" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
            <FormControlLabel label="Delete User" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label="Users CRUD"
                control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />}
            />
            {children}
        </div>
    );
}
