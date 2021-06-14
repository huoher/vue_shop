import request from "@/request";

export function login(data) {
  return request({
    url: "http://localhost:8080/vue_shop_java/Login",
    method: "post",
    params: data,
  });
}
