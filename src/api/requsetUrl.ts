
export default (actionName: string) => {
    let baseUrl = process.env.NODE_ENV === 'development' ? '/list/' : process.env.VUE_APP_API_URL_WEB;
    return baseUrl + actionName;
};
