import { RouteRecordRaw } from "vue-router";

export interface SETTINGSTATETYPE {
  menuList?: RouteRecordRaw[];
  crumbList?: string[]
  token: String,
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
  LOGIN = 'LOGIN',
  LOGOUT = "LOGOUT"
}