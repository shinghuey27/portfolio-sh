import { useState} from "react";
import styles from "../css/project.module.scss";
import ReactPaginate from "react-paginate";
const Buttons = [
  { name: "All", value: "All" },
  { name: "React", value: "#React" },
  { name: "CSS", value: "#CSS" },
  { name: "Responsive", value: "#responsive" },
  { name: "HTML", value: "#HTML" },
  { name: "Grid", value: "#grid" },

];

export const Cards = [
  {
    id: 1,
    tag: ["#HTML", "#CSS", "#responsive"],
    name: "Recipe Blog",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/recipe.png",
    link:"https://food-blog-theta.vercel.app/",
    linkCode:"https://github.com/shinghuey27/food-blog",

  },
  {
    id: 2,
    tag: ["#React", "#grid" ,"#responsive"],
    name: "My Gallery",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/gallery.png",
    link:"https://gallery-sh.vercel.app/",
    linkCode:"https://github.com/shinghuey27/gallery-sh",


  },
  {
    id: 3,
    tag: ["#CSS", "#responsive"],
    name: "Checkout",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/checkout.png",
    link:"https://checkout-sh.vercel.app/",
    linkCode:"https://github.com/shinghuey27/checkout-sh",


  },
  {
    id: 4,
    tag: ["#HTML", "#CSS"],
    name: "Edie Homepage",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/edie.png",
    link:"https://edie-homepage-sh.vercel.app/",
    linkCode:"https://github.com/shinghuey27/edie-homepage-sh",

  },
  {
    id: 5,
    tag: ["#HTML", "#CSS"],
    name: "My team page",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/team.png",
    link:"https://team-page-eight.vercel.app/",
    linkCode:"https://github.com/shinghuey27/team-page",

  },
  {
    id: 6,
    tag: ["#HTML", "#CSS"],
    name: "Interior consultant",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/interior.png",
    link:"https://interior-tau.vercel.app/",
    linkCode:"https://github.com/shinghuey27/interior",

  },
  {
    id: 7,
    tag: ["#HTML", "#CSS"],
    name: "404 Not Found",
    desc: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    img: "../../img/404.png",
    link:"https://error-page-one.vercel.app/",
    linkCode:"https://github.com/shinghuey27/error-page",

  },
];

const Project = () => {
  const [card, setFilteredCard] = useState(getCard());

  const [perPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * perPage;
  const currentPageData = card.slice(offset, offset + perPage);
  const pageCount = Math.ceil(card.length / perPage);
  const [tagClick, setTagClick] = useState("All");


  const handlePageClick = ({ selected :selectedPage}) => {
    setCurrentPage(selectedPage);
  };

  function getCard() {
    return Cards;
  }
  function handleClick(e) {
    let tagCard = e.target.value;

    tagCard !== "All"
      ? setFilteredCard(FilterCard(tagCard))
      : setFilteredCard(getCard());

      setTagClick(tagCard);  

  }

  function FilterCard(tagCard) {
    return getCard().filter((c) => c.tag.some((t) => t === tagCard));
  }

  return (
    <section>
      <section>
        <div className={styles.container}>
          <div className={styles.overview}>
            <h1>Projects ({Cards.length})</h1>
            <div className={styles.buttonAll}>
              {Buttons.map((button) => (
                <button
                  key={button.name}
                  value={button.value}
                  className={button.value === tagClick ? styles.Active : styles.button}
                  onClick={handleClick}

                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.cardFlex}>
          {currentPageData.map((cards) => (
            <div className={styles.cardContainer} key={cards.id}>
              <div className={styles.cardDetails}>
                <img
                  src={cards.img}
                  alt={cards.img}
                  className={styles.cardImg}
                />

                <div className={styles.tagOverview}>
                  <div className={styles.tag}>{cards.tag[0]}</div>
                  <div className={styles.tag}>{cards.tag[1]}</div>
                  <div className={styles.tag}>{cards.tag[2]}</div>
                </div>
                <div className={styles.cardName}>{cards.name}</div>
                <div className={styles.cardDesc}>{cards.desc}</div>

                <div className={styles.buttonOverview}>
                  <a href={cards.link} target="_blank"  rel="noreferrer" className={styles.buttonDemo}>Demo
                  </a>
                  <a href={cards.linkCode} target="_blank"  rel="noreferrer" className={styles.buttonCode}>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
      </section>
    </section>
  );
};

export default Project;
