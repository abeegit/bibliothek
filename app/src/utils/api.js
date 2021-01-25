import environment from "./environment";

const API_URL = environment.api.url;
const API_VERSION = environment.api.version;

export const URL = API_URL + "/api/" + API_VERSION;
export const TIMEOUT = 5000;
