import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '688e6afbb5584186af34fc77355659f6'
    }
})