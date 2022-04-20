export interface LoginReq {
  email?: string;
  password?: string;
}

export interface LoginRes {
  data: Data;
  status: number;
  statusText: string;
  headers: TopLevelHeaders;
  config: Config;
  request?: Data;
}

export interface Config {
  transitional: Transitional;
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  headers: ConfigHeaders;
  method: string;
  url: string;
  data: string;
}

export interface ConfigHeaders {
  Accept: string;
  'Content-Type': string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  token: string;
}

export interface TopLevelHeaders {
  'content-length': string;
  'content-type': string;
}
