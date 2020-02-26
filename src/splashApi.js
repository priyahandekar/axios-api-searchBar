import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
       Authorization: 'Client-ID VMW7KpO4VocPCF9PDC6n4LcmlqDlkBtpUA2W_gPBPf4'
    }
})