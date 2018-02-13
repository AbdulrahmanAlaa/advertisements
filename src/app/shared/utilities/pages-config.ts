/**
 * holds all application routes that could be replaced 
 * in future with out cracking the app
 */
export const config = {
    'advertisements': {
        'name': 'adv',
        'route': '/adv',
        'loadChildrens': 'app/ads/ads.module#AdsModule',
    },
}