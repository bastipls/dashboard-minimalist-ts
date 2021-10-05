export interface IToken {
    exp:           number;
    iat:           number;
    auth_time:     number;
    jti:           string;
    iss:           string;
    sub:           string;
    typ:           string;
    azp:           string;
    nonce:         string;
    session_state: string;
    acr:           string;
    scope:         string;
    realm_access?:  IRealmAccess;
    user?:          IUser;
    authorities?:   string[];
  }
  export interface IRealmAccess {
    roles: string[];
  }
  export interface IUser {
    lastName:     string;
    firstName:    string;
    groups:       string[];
    userId:       string;
    email:        string;
    dependencies: string[];
  }