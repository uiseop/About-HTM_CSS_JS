const getCookie = (key) => {
    let value = document.cookie;
    let parts = value.split(`${key}=`); // user_id=aaa; user_pwd=bbb;
    if (parts.length === 2) { // 아무것도 나뉘지 않아!
        return parts.pop().split(";").shift();
    }
};

const setCookie = (key, value, exp = 2) => {
    let date = new Date();
    // 날짜를 만들어줍니다.
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    console.log(date);
    // 저장!
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
};

const deleteCookie = (key) => {
    document.cookie = key + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
