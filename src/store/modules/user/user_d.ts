export interface userStateType {
    token: String,
    username: string,
    avatar: string,
}

export enum MUTATIONTYPES {
    SETTOKEN = 'SETTOKEN',
    SETUSERNAME = 'SETUSERNAME',
    SETAVATAR = 'SETAVATAR',
}