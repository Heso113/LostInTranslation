import { setStorge, getStorge, clearStorge } from './localStorge';

class Auth {
    
    constructor(){
        this.authenticated = false;
    }

    login(user,cb) {
        this.authenticated= true;
        setStorge('ra_session',user);
        cb();
    }

    logout(cb) {
        this.authenticated= false;
        clearStorge();
        cb();
    }

    isAuthenticated() {
        let session = getStorge('ra_session'); 
        if(!session){
            console.log('Is not authenticated');
        } else {
            this.authenticated = true;
            console.log('Is authenticated');
        }
        return this.authenticated;
    }
}

export default new Auth()