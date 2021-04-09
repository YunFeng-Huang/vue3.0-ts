import { RouteRecordRaw } from "vue-router";

export interface SETTINGSTATETYPE {
  menuList?: any[];
  crumbList?: string[]
  token: string,
  deepActive: string,
  permissionList: string[],
  localRouterName: string[],
  systemType: number
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
  SETCRUBLIST = "SETCRUBLIST",
  LOGIN = 'LOGIN',
  LOGOUT = "LOGOUT",
  GETPERMISSTIONLIST = "GETPERMISSTIONLIST",
  SETVALUE = "SETVALUE"
}
export interface PARAMS {
  key: string,
  value: any
}