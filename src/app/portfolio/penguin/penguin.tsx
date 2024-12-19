import styles from "../penguin/penguin.module.css"

const Penguin = () => {
    return (
        <div className={`${styles.penguin}`}>
            <div className={styles.penguinHead}>
                <div className={`${styles.face} ${styles.left}`}></div>
                <div className={`${styles.face} ${styles.right}`}></div>
                <div className={styles.chin}></div>
                <div className={`${styles.eye} ${styles.left}`}>
                    <div className={styles.eyelid}></div>
                </div>
                <div className={`${styles.eye} ${styles.right}`}>
                    <div className={styles.eyelid}></div>
                </div>
                <div className={`${styles.blush} ${styles.left}`}></div>
                <div className={`${styles.blush} ${styles.right}`}></div>
                <div className={`${styles.beak} ${styles.top}`}></div>
                <div className={`${styles.beak} ${styles.bottom}`}></div>
            </div>
            <div className={styles.shirt}>
            </div>
            <div className={styles.penguinBody}>
                <div className={`${styles.arm} ${styles.left}`}></div>
                <div className={`${styles.arm} ${styles.right}`}></div>
                <div className={`${styles.foot} ${styles.left}`}></div>
                <div className={`${styles.foot} ${styles.right}`}></div>
            </div>
        </div>
    );
};

export default Penguin;