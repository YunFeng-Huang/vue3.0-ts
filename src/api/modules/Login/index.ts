import api from "./api";
import requset from "@/api/requset";
import requsetUrl from "@/api/requsetUrl";
import requsetParam from "@/api/requsetParam";

let checkcode = (params) => {
  return requset({
    url: requsetUrl(api["checkcode"]),
    method: "get",
    params: params,
  });
};
let login = (params: any) => {
  return requset({
    url: requsetUrl(api["login"]),
    method: "post",
    data: params,
  });
};
let logout = (params: any) => {
  return requset({
    url: requsetUrl(api["logout"]),
    method: "post",
    data: params,
  });
};
let merchants = (params: any) => {
  return requset({
    url: requsetUrl(api["merchants"]),
    method: "post",
    data: params,
  });
};
export default {
  login,
  logout,
  checkcode,
  merchants
};
