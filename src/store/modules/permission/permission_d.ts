import { RouteRecordRaw } from "vue-router";

export interface SETTINGSTATETYPE {
  menuList?: RouteRecordRaw[];
  crumbList?: string[]
  token: String,
  permissionList: string[]
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
  SETCRUBLIST = "SETCRUBLIST",
  LOGIN = 'LOGIN',
  LOGOUT = "LOGOUT",
  GETPERMISSTIONLIST = "GETPERMISSTIONLIST"
}