import Link from 'next/link';
import styles from './styles.module.scss';

type SideMenuItem = {
  id: string;
  title: string;
  url: string;
};

type Props = {
  id?: string;
  className?: string;
};

const sideMenuItems = [
  { id: 'first', title: 'はじめに', url: '/study' },
  { id: 'useState', title: '01. useState', url: '/study/hooks/useState' },
  { id: 'useEffect', title: '02. useEffect', url: '/study/hooks/useEffect' },
  { id: 'useReducer', title: '03. useReducer', url: '/study/hooks/useReducer' },
  { id: 'useContext', title: '04. useContext', url: '/study/hooks/useContext' },
  { id: 'useRef', title: '05. useRef', url: '/study/hooks/useRef' },
  { id: 'useMemo', title: '06. useMemo', url: '/study/hooks/useMemo' },
] as SideMenuItem[];

const SideMenu = ({ id, className }: Props) => {
  return (
    <div className={`${className} ${styles.sideMenu}`}>
      <p className={styles.title}>目次</p>
      <ul>
        {sideMenuItems.map(({ id: itemId, title, url }) => (
          <li key={itemId} className="mb-2">
            {id === itemId ? <span>{title}</span> : <Link href={url}>{title}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
export type { SideMenuItem };
