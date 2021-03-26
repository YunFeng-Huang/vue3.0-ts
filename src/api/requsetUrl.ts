
export default (actionName: string) => {
    return process.env.VUE_APP_BASE_URL + actionName;
};
