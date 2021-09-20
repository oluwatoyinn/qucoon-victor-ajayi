import axios from "axios";

const baseURL = "https://x2rq8qbt0d.execute-api.us-east-1.amazonaws.com/dev";
const token = "SK-DEV-00001-UNIVACITI-9999999999-1558D1554781C926F2D9A330B020CA86ABA0F241DB7BAD26F88305F3F48D590A66CC73CE6AD2219A005E7640DDE662BA";
export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `${token}`,
  },
});
