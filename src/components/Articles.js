import React, { useEffect, useState, useContext } from "react";
import { ApiCall } from "../utils/ApiCall";
import Article from "./Article";
import { SiteContext } from "../context/siteContext";
import { prepareData, articlesSort } from "../helpers/articles";
import { ContentArea } from "./Layout";
import Empty from "./Empty";
import ErrorModal from "./ErrorModal";
import { TYPE } from "../utils/const";

const Articles = () => {
  const [articles, updateArticles] = useState([]);
  const { filter, sort, error, updateError } = useContext(SiteContext);

  const chunkFetch = async (fetched, filters, name) => {
    if (filters.includes(name)) {
      fetched[name] = await ApiCall(name, () => updateError(true));
      return fetched;
    }
  };

  const fetchData = async (filterValue) => {
    const fetchedArticles = {
      fashion: [],
      sports: [],
    };
    await chunkFetch(fetchedArticles, filterValue, TYPE.FASHION);
    await chunkFetch(fetchedArticles, filterValue, TYPE.SPORTS);

    const data = prepareData([
      ...fetchedArticles.fashion,
      ...fetchedArticles.sports,
    ]);
    updateArticles(data);
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
