'use client';

import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ReactNode, useEffect, useMemo } from 'react';
import clsx from 'clsx';

import styles from '@/components/Modal.module.scss';

type ModalOption = {
  closeOutside?: boolean;
  className?: string;
  backdropClassName?: string;
};

type ModalData = {
  node: ReactNode;
  isOpen: boolean;
} & ModalOption;

const modalAtom = atom<ModalData>({ node: undefined, isOpen: false });

const modalStackAtom = atom<ModalData[]>([]);

const useModal = () => {
  const setAtom = useSetAtom(modalAtom);
  const [stack, setStack] = useAtom(modalStackAtom);

  useEffect(() => {
    const [current] = stack;
    if (current) {
      const { node, ...opt } = current;
      setAtom({
        ...opt,
        node,
        isOpen: true,
      });
    }
  }, [setAtom, stack]);

  return useMemo(() => {
    return {
      open: (node: ReactNode, options?: ModalOption) => {
        setStack(item => [...item, { node, ...options, isOpen: false }]);
      },
      close: () => {
        setAtom(item => ({ ...item, isOpen: false }));
        setTimeout(() => {
          setStack(items => {
            return items.slice(1);
          });
        }, 100);
      },
    };
  }, [setAtom, setStack]);
};

const ModalHandler = () => {
  const { node, isOpen, ...options } = useAtomValue(modalAtom);
  const { close } = useModal();

  return (
    <>
      <div className={clsx(styles.modal, isOpen && styles['modal--active'])}>
        <div className={clsx(styles.modal__box, options.className)}>
          <button className={styles.modal__close} onClick={close}></button>
          {node}
        </div>
        <label
          className={clsx(styles.modal__backdrop, options.backdropClassName)}
          onClick={options.closeOutside ? close : undefined}
        >
          {/* Close */}
        </label>
      </div>
    </>
  );
};

export { useModal, ModalHandler };
