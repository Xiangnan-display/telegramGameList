// userInfo.js

export function getUserInfo() {
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
    const user = initDataUnsafe.user;
    if (user) {
        const userInfo = {
            query_id: initDataUnsafe.query_id,
            user_id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            allows_write_to_pm: user.allows_write_to_pm,
            hash: initDataUnsafe.hash,
            auth_date: initDataUnsafe.auth_date
        };
        return initDataUnsafe;
    } else {
        return {
            query_id: null,
            user_id: null,
            first_name: null,
            last_name: null,
            allows_write_to_pm: null,
            hash: null,
            auth_date: null
        };
    }
}


