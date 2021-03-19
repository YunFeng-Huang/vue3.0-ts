import { RouteRecordRaw } from "vue-router";

export interface permissionState {
  menuList?: RouteRecordRaw[];
  isSidebarNavCollapse?: Boolean;
}
export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
}