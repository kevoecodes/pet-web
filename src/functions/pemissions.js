const PERMISSIONS = {
    DEFAULT: '0',
    // USERS CRUD
    USERS_READ: '1',
    USERS_CREATE: '2',
    USER_UPDATE: '3',
    USER_DELETE: '4',
    USERS_CRUD: ['1', '2', '3', '4'],

    // ROLES CURD
    ROLE_CREATE: '5',
    ROLE_UPDATE: '6',
    ROLE_DELETE: '7',
    ROLE_READ: '8',
    ROLES_CRUD: ['5', '6', '7', '8'],

    // BL CRUD
    BL_CREATE: '9',
    BL_UPDATE: '10',
    BL_DELETE: '11',
    BL_READ: '12',
    BL_MARK_DONE: '13',

    // BL_CHARGE CRUD
    BL_CHARGE_CREATE: '14',
    BL_CHARGE_UPDATE: '15',
    BL_CHARGE_DELETE: '16',
    BL_CHARGE_READ: '17',
    BL_CHARGE_VERIFY: '18',
    BL_CHARGE_APPROVE: '19',
    BL_CHARGE_PAY: '20'
};

export default PERMISSIONS;
