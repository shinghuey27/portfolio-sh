import styles from "../css/summary.module.scss";
import  "../App.scss";
const Summary = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.overview}>
          <img
            src="./img/person1.png"
            alt="person"
            className={styles.personImg}
          />

          <div className={styles.intro}>
            <div className={styles.nameContact}>
              <div className={styles.name}>
                <h1 className={styles.nameTitle}>Billy Pearson</h1>
                <p className={styles.job}>Front-end developer</p>
              </div>

              <div className={styles.contact}>
                <div className={styles.iconContact}>
                  <span className="material-icons">email</span>
                  <p>billy@example.com</p>
                </div>
                <div className={styles.iconContact}>
                  <span className="material-icons">call</span>
                  <p>(+603) 546 624 342</p>
                </div>
              </div>
            </div>

            <div className={styles.desc}>
              <p>
                Self-motivated developer, who is willing to learn and create
                outstanding UI applications. {`\n`}{`\n`}
                Donec aliquam est dui, vel
                vestibulum diam sollicitudin id. Quisque feugiat malesuada
                molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
