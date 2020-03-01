import BazarbayClient from 'bazarbay-client';
import clientSettings from './settings';

const api = new BazarbayClient({
	ajaxBaseUrl: clientSettings.ajaxBaseUrl || '/ajax'
});

export default api;
