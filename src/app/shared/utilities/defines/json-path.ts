/**
 * contains all json path queries so in case the back-end response changes we
 * only modifies this query rather than the whole app
 */
export const JSON_PATHS = {
    USER: {
        ID: '$.id',
        FNAME: "$.first_name",
        LNAME: "$.last_name",
        AVATAR: "$.avatar"
    },
    LOGIN: {
        TOKEN: "$.token"
    },
    ADS: {
        ROOT: '$.data',
        ADDITIONAL_ID: '$.additionalId',
        ID: "$._id['$id']",
        HAS_FURNITURE: '$.hasFurniture',
        PURPOSE: '$.purpose',
        TITLE: '$.title',
        USER_WISHES: '$.userWishes.visibleAddress',
        REAL_ESTATE_SUMMARY: {
            ROOT: '$.realestateSummary',
            ADDRESS: '$.address',
            NO_OF_ROOMS: '$.numberOfRooms',
            SPACE: '$.space'
        },
        ADV_PRICE: {
            ROOT: '$.advertisementPrice',
            BASE_RENT: '$.baseRent',
            SELL_PRICE: '$.sellPrice'
        },
        ASSETS: { ROOT: '$.advertisementAssets' }
    }
}