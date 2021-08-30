import { useEffect, useState } from "react";
import styles from "../css/frontend.module.scss";
const Data = [
  { id:1,skillTitle: "React", width: "155px" },
  { id:2,skillTitle: "Javascript", width: "198.44px" },
  { id:3,skillTitle: "Css", width: "218.71px" },
  { id:4,skillTitle: "Vue", width: "155.77px" },
  { id:5,skillTitle: "Redux", width: "198.44px" },
  { id:6,skillTitle: "React Native", width: "218.71px" },
];

const Hobbies = [
  {
    id:1,
    img: "././img/gaming.png",
    title: "Gaming",
    desc: "Quisque feugiat malesuada molestie.",
  },
  {
    id:2,
    img: "././img/cooking.png",
    title: "Cooking",
    desc: "Quisque feugiat malesuada molestie.",
  },
  {
    id:3,
    img: "././img/biking.png",
    title: "Biking",
    desc: "Quisque feugiat malesuada molestie.",
  },
];
const Frontend = () => {
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    setRefresh(false);
    console.log(refresh);
  }, [refresh]);

  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.overview}>
            <h1 className={styles.title}>Front end</h1>
            {Data.map((data) => (
              <div className={styles.skillBar} key={data.id}>
                <div className={styles.skillTitle}>{data.skillTitle}</div>
                <div className={styles.skillContainer}>
                  <div
                    style={{ width: `${data.width}` }}
                    className={
                      refresh
                        ? styles.fillContainer
                        : styles.fillContainerRefresh
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={styles.hobbyContainer}>
          <div className={styles.overview}>
            <h1 className={styles.titleHobby}>Hobbies</h1>
            {Hobbies.map((hobby) => (
              <div className={styles.hobby} key={hobby.id}>
                  <img src={hobby.img} alt={hobby.img} className={styles.hobbyImg}/>
                  <h2>{hobby.title}</h2>
                  <p>{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frontend;
