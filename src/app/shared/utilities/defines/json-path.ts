/**
 * contains all json path queries so in case the back-end response changes we
 * only modifies this query rather than the whole app
 */
export const JSON_PATHS = {
    USER: {
        ID:'$.id',
        FNAME: "$.first_name",
        LNAME:"$.last_name",
        AVATAR:"$.avatar"
    },
    LOGIN: {
        TOKEN: "$.token"
    }
}