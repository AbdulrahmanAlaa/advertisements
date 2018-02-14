/**
 * holds all application routes that could be replaced 
 * in future with out cracking the app
 */
export const config = {
    'login': {
        'name': 'login',
        'route': '/login',
        'loadChildren': 'app/auth/auth.module#AuthModule'
    },
    'advertisements': {
        'name': 'adv',
        'route': '/adv',
        'loadChildrens': 'app/ads/ads.module#AdsModule',
    },
}