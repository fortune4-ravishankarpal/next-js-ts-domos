"use server";
import { apiEndPoint, tTodo } from "@/app/todo/todo.type";
import axios from "axios";

const db = axios.create({ baseURL: "http://localhost:3002" });
const { todos: sTodo } = apiEndPoint;

export const gets = async () => await db.get(sTodo).then((res) => res.data);
export const create = async (todo: { title: string }) => await db.post(sTodo, todo).then((res) => res.data);
export const update = async (id: number, todo: tTodo) => await db.put(`${sTodo}/${id}`, todo).then((res) => res.data);
export const del = async (id: number) => await db.delete(`${sTodo}/${id}`).then((res) => res.data);
