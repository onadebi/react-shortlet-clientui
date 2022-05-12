const Appsettings = {
    appName: 'ShortLet',
    cookies:{
        main:'shorletto',
    },
    baseUrl: 'https://chucknorrisapp.azurewebsites.net/api/',
    functions: {
        createCookieInHour: (cookieName: string, cookieValue: string, hourToExpire: number) => {
            let date = new Date();
            date.setTime(date.getTime() + (hourToExpire * 60 * 60 * 1000));
            document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toLocaleString();
        },
        getCookieByName: (cookieName: string): string | undefined => {
            var name = cookieName + "=";
            var allCookieArray = document.cookie.split(';');
            for (var i = 0; i < allCookieArray.length; i++) {
                var temp = allCookieArray[i].trim();
                if (temp.indexOf(name) === 0)
                    return temp.substring(name.length, temp.length);
            }
            return undefined;
        },
        ToSentenceUpper(text: string) {
            return text[0].toUpperCase() + text.slice(1);
        },
        getAllCookies:():string=>{
            return document.cookie;
        }
    }
};

export default Appsettings;