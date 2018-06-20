import client from './client';

export default {    
    user: {
        login: credentials => client.post('/api/v2/auth/login', { credentials }).then(res => res.data.user),
        signup: user => client.post('/api/v2/auth/register', { user }).then(res => res.data.user)
    }
};