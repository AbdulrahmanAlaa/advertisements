/**
 * holds all the Api related url to easy the process when moving in production 
 * or changing the target api url with out cracking the app 
 */
import { environment } from './../../../environments/environment';
const version = 'v1';
const domainUrl = `${environment.APIUrl}${version}`;
export const API_URLS = {
    'Login': environment.APIURLReqres + '/login',
    'GET_ADS': `${domainUrl}/advertisements`,
    'GET_User_DATA':environment.APIURLReqres + '/users/2'
}