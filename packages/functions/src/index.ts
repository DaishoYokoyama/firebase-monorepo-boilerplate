import * as functions from "firebase-functions";

import { appServer } from "./app";

export const api = functions.https.onRequest(appServer);
