import axios from 'axios';
import { response } from 'express';
import logger from './logger';

const httpClient = axios.create({});

httpClient.interceptors.request.use(
    (config) => {
        const { url } = config;
        logger.info(`Request triggered to ${url}`);
        return config;
    },
    (err) => {
        logger.error(`Error on API response`);
        return Promise.reject(err);
    }
);

httpClient.interceptors.response.use(
    (resp) => {
        const { url } = resp.config;
        logger.info(`Successful response from ${url}. Status: ${resp.status}`);
        return response;
    },
    (err) => {
        logger.error(`Error on API response`);
        return Promise.reject(err);
    }
);

export default httpClient;