import qs from 'qs';
export default (params: string) => {
    return qs.stringify(params);
};
