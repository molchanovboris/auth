"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
    const { data: session } = useSession();

    return (
        <div>
            {session?.user && (
                <div className={styles.userContainer}>
                    {session.user.image && (
                        <Image src={session.user.image} alt="avatar" height={100} width={100} />
                    )}
                    <p className={styles.userName}>{session.user.name}</p>
                    <p className={styles.userName}>{session.user.email}</p>
                </div>
            )}
        </div>
    )

}