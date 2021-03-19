
export default (actionName: string) => {
    let baseUrl = process.env.NODE_ENV === 'development' ? '/v1/' : process.env.VUE_APP_API_URL_WEB;
    return baseUrl + actionName;
};
