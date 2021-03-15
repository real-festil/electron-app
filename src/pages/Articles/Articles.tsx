import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout';
import * as api from '../../api/api';
import { setArticles as setArticlesToStore } from '../../store/ducks/articles';

const Articles = () => {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState(null) as any;
  const storeArticles = useSelector((state) => state.articles.articles);

  const getArticles = async () => {
    const res = await api.getArticles();
    if (res) {
      setArticles(res.data);
      if (JSON.stringify(res.data) !== JSON.stringify(storeArticles)) {
        dispatch(setArticlesToStore(res.data));
      }
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <MainLayout title="Articles">
      <Link to="/">Go home</Link>
      <Row gutter={16}>
        {storeArticles
          ? storeArticles.map((article: any, index: any) => (
              <Col
                span={8} // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <Card
                  title={article.title}
                  extra={
                    <Link
                      to={{
                        pathname: `/article/${article.title}`,
                        state: article.article,
                      }}
                    >
                      More
                    </Link>
                  }
                  style={{ width: 300 }}
                >
                  <p>{article.article}</p>
                </Card>
              </Col>
            ))
          : articles &&
            articles.map((article: any, index: any) => (
              <Col
                span={8} // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <Card
                  title={article.title}
                  extra={
                    <Link
                      to={{
                        pathname: `/article/${article.title}`,
                        state: article.article,
                      }}
                    >
                      More
                    </Link>
                  }
                  style={{ width: 300 }}
                >
                  <p>{article.article}</p>
                </Card>
              </Col>
            ))}
      </Row>
    </MainLayout>
  );
};

export default Articles;
