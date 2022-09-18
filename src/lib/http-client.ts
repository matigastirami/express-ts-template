import axios from 'axios';
import logger from './logger';

const httpClient = axios.create();

httpClient.interceptors.request.use(
    (config) => {
        const { url } = config;
        logger.info(`Request triggered to ${url}`);
        return config;
    },
    (err) => {
        logger.error(`[Interceptor]: Error on API response`);
        return Promise.reject(err);
    }
);

httpClient.interceptors.response.use(
    (resp) => {
        const { url } = resp.config;
        logger.info(`Successful response from ${url}. Status: ${resp.status}`);
        return resp;
    },
    (err) => {
        logger.error(`[Interceptor]: Error on API response`);
        return Promise.reject(err);
    }
);

export default httpClient;