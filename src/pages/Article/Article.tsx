/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const Article = (props: any) => {
  const history = useHistory();

  useEffect(() => {
    if (!props.location.state) {
      history.replace(`/articles`);
    }
  }, []);

  return (
    <>
      {props.location.state && (
        <MainLayout title={props.match.params.id}>
          <p>{props.location.state}</p>
          <Link to="/articles">Go back</Link>
        </MainLayout>
      )}
    </>
  );
};

export default Article;
