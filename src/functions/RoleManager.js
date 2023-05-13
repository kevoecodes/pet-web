import PERMISSIONS from './pemissions';

class RoleManager {
    static PERMISSIONS = PERMISSIONS;
    constructor() {
        this.user = null;
        this.is_superuser = false;
        this.getUser();
    }

    getUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user !== null) {
            this.is_superuser = this.user.is_superuser;
        }
    }

    has_permission(permission) {
        if (this.is_superuser) return true;
        // console.log(permission, this.user.role.permissions);
        // console.log(this.user.role.permissions.includes(permission));
        // if (this.user !== null) {
        //     return this.user.role.permissions.includes(permission);
        // }
        return true;
    }
}

export default new RoleManager();
