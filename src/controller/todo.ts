"use server";
import { wait } from "@/utils/utils";

export async function temp() {
    await wait(1000);
    console.log("Temporary function executed");
    return "ok";
}
