import api from "./api";
import requset from "@/api/requset";
import requsetUrl from "@/api/requsetUrl";
import requsetParam from "@/api/requsetParam";

let order = (params) => {
  return requset({
    url: requsetUrl(api["order"]),
    method: "post",
    data: params,
  });
};
export default {
  order,
};
