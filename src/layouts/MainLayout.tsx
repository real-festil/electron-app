import React from 'react';
import { Layout } from 'antd';
import { Offline } from 'react-detect-offline';

import Header from '../components/Header';

const MainLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <Layout>
    <Header title={title} />
    <Layout.Content>{children}</Layout.Content>
    <Layout.Footer>
      <Offline>You are offline</Offline>
    </Layout.Footer>
  </Layout>
);

export default MainLayout;
