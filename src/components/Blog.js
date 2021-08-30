import styles from "../css/blog.module.scss";
const Data = [
  {
      id:1,
    img: "../../img/adidas.png",
    date: "Feb 2017 - Current",
    job: "Front-end developer",
    desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",

  },
  {
    id:2,
    img: "../../img/hm.png",
    date: "Aug 2016 - Feb 2018",
    job: "Full-stack developer",
    desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    
  },
];
const Blog = () => {
  return (
    <div>
      <section>
        <div className={styles.blogContainer}>
          <div className={styles.overview}>
            <h2>Blog</h2>
            <div className={styles.cssImg}>
              <h1>How to organize your CSS</h1>
              <img
                src="../../img/mac.png"
                alt="mac"
                className={styles.macImg}
              />
            </div>
            <p>
              In this article I tell the story about Proin eu justo sit amet
              lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
              {`\n`}
              {`\n`}
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>

            <div>dev.to</div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.expContainer}>
          <div className={styles.expOverview}>
            <h1>Experiences</h1>
            {
                Data.map((data)=>
                <div className={styles.expCard} key={data.id}>
                    <img src={data.img} alt={data.img} className={styles.cardImg}/>
                    <div className={styles.expDetail}>
                        <div>{data.date}</div>
                        <h1>{data.job}</h1>
                        <p>{data.desc}</p>
                    </div>
                </div>
                )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
