import { cardsData } from "../assets/constants";
import ArticleItem from "./ArticleItem";
import Tabs from "./Tabs";

function Articles() {
  return (
    <div className="w-full md:w-9/12 mx-auto">
      <Tabs />
      {cardsData.map((data, index) => (
        <ArticleItem key={index} data={data} />
      ))}
    </div>
  );
}

export default Articles;
