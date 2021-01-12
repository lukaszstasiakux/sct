import React, { useEffect, useState, useContext } from "react";
import { ApiCall } from "../utils/ApiCall";
import Article from "./Article";
import { SiteContext } from "../context/siteContext";
import { prepareData, articlesSort } from "../helpers/articles";
import { ContentArea } from "./Layout";
import Empty from "./Empty";
import ErrorModal from "./ErrorModal";

const Articles = (props) => {
  const [articles, updateArticles] = useState([]);
  const { filter, sort, error, updateError } = useContext(SiteContext);

  const fetchData = (filterValue) => {
    ApiCall(
      filterValue,
      (preData) => {
        const data = prepareData(preData);
        updateArticles(data);
      },
      () => updateError(true)
    );
  };

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  return (
    <ContentArea>
      {articles.length > 0 ? (
        articles
          .sort((a, b) => articlesSort(a, b, sort))
          .map((article) => {
            return <Article key={article.id} details={article} />;
          })
      ) : (
        <Empty />
      )}
      {error && <ErrorModal />}
    </ContentArea>
  );
};

export default Articles;
