import { setStorge, getStorge, clearStorge } from './localStorge';

class Auth {
    
    constructor(){
        this.authenticated = false;
    }

    login(user,cb) {
        this.authenticated= true;
         setStorge('ra_session',user)
        cb()
    }

    logout(cb) {
        this.authenticated= false;
        clearStorge();
        cb()
    }

    isAuthenticated() {
        if(getStorge){
            console.log('Is authenticated');
            return this.authenticated;
        }
    }
}

export default new Auth()