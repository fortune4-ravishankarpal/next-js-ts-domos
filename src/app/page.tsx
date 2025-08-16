import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Link href="/todo">Go to Todo</Link>
        </div>
    );
}
