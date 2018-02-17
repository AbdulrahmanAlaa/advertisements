import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_PREFIX, USER } from '../utilities/defines';
import { User } from '../interfaces/user';
/**
 * the Storage Service decorator that help angular DI system to work  
 */
@Injectable()
export class StorageService {
    /** holds current logged in user info*/
    public user: User;

    /** holds current logged in user token*/
    public token: string;

    /** holds current logged in user status*/
    public status: { isLoggedIn: boolean };


    /**
     * intiating the default values
     */
    constructor() {
        this.status = { isLoggedIn: this.getStorage(USER) ? true : false };
        this.user = this.getStorage(USER) || null;
    }

    /**
      * add/set item to browser localstorage 
      * @param key the identifier for the localstorage item
       * @param value the value of localstorage item
      */
    public setStorage(key: string, value: any) {
        const newKey = `${LOCAL_STORAGE_PREFIX}.${key}`;
        //Add to localstorage 
        if (typeof value === 'object') {
            localStorage.setItem(newKey, JSON.stringify(value));
        } else {
            localStorage.setItem(newKey, String(value));
        }

    }

    /**
      * add/set item to browser sessionStorage 
      * @param key the identifier for the sessionStorage item
       * @param value the value of sessionStorage item
      */
    public setSession(key: string, value: any) {

        const newKey = `${LOCAL_STORAGE_PREFIX}.${key}`;
        //Add to sessionStorage 
        if (typeof value === 'object') {
            sessionStorage.setItem(newKey, JSON.stringify(value));
        } else {
            sessionStorage.setItem(newKey, String(value));
        }

    }

    /**
     * read certain item from the sessionStorage  and 
     * parse the item to json if the item is a stringified object.
         * @param  {key} The key of the property to be detected
         * @returns {Object} the returned object holds the value for the detected property
     */
    public getSession(key: string) {
        try {
            return JSON.parse(sessionStorage.getItem(LOCAL_STORAGE_PREFIX + "." + key));
        } catch (error) {
            return sessionStorage.getItem(LOCAL_STORAGE_PREFIX + "." + key);
        }
    }

    /**
     * read certain item from the localStorage and 
     * parse the item to json if the item is a stringified object.
         * @param  {key} The key of the property to be detected
         * @returns {Object} the returned object holds the value for the detected property
     */
    public getStorage(key: string) {
        sessionStorage
        try {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX + "." + key));
        } catch (error) {
            return localStorage.getItem(LOCAL_STORAGE_PREFIX + "." + key);
        }
    }

    /**  
         * remove certain item from the localStorage and from the cachedSession
           * @param  {key} The key of the property to be removed
         */
    public remove(key: string) {
        localStorage.removeItem(LOCAL_STORAGE_PREFIX + "." + key);
    }

    /**
         * clear all the localStorage items and the cachedSession items
         */
    public empty() {
        localStorage.clear();
    }

    /**
         * list all items in the localStorage
         * @returns {Object} the returned object holds the cached Session object
         */
    public listAllItems() {
        var items = []
        for (var key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                var element = localStorage[key];
                items.push(items);
            }
        }
        return items;
    }

}