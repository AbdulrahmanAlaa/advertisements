import { environment } from './../../../environments/environment';

const version = 'v1';
const domainUrl = `${environment.APIUrl}/${version}`;
export const API_URLS = {
    'GET_ADS': `${domainUrl}/advertisements`,
}