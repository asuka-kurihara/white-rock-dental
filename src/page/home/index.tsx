'use client';

import { useModal } from '@/components/Modal';
import styles from '@/page/home/home.module.scss';

const HomeIndex = () => {
  const { open } = useModal();

  const openModal = () => {
    open(
      <div>
        <h2 className={styles.home__modalTitle}>Modal</h2>
      </div>,
      {
        closeOutside: true,
      }
    );
  };
  return (
    <>
      <h1 className={styles.home__title}>Home</h1>
      <button onClick={openModal}>Open Modal</button>
    </>
  );
};

export { HomeIndex };
