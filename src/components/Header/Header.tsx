import React from 'react';

import styles from './Header.module.scss';

const Header = ({ title }: { title: string }) => (
  <header className={styles.header}>{title}</header>
);

export default Header;
