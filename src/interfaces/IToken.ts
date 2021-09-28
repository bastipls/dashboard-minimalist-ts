export interface Token {
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
    realm_access:  RealmAccess;
    scope:         string;
    user:          User;
    authorities:   string[];
  }
  export interface RealmAccess {
    roles: string[];
  }
  export interface User {
    lastName:     string;
    firstName:    string;
    groups:       string[];
    userId:       string;
    email:        string;
    dependencies: string[];
  }