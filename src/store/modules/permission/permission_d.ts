import { RouteRecordRaw } from "vue-router";

export interface SETTINGSTATETYPE {
  menuList?: RouteRecordRaw[];
  isSidebarNavCollapse?: Boolean;
  token: String,
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
  LOGIN = 'LOGIN',
  LOGOUT = "LOGOUT"
}