import React from 'react'
import SigninButton from '../SigninButton'
import styles from './Headerbar.module.scss';

export const Headerbar = () => {
  return (
    <header className={styles.header}>
        <SigninButton />
    </header>
  )
}
