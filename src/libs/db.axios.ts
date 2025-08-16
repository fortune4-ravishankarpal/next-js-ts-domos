import axios from "axios";

const db = axios.create({
    baseURL: "http://localhost:3002",
});

export default db;
