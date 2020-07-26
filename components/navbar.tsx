import Link from 'next/link';
import classNames from 'classnames';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '../i18n';
import { useRouter } from 'next/router';
import styles from './layout.module.css';

const PAGES = ['blog', 'about_me', 'portfolio', 'contact_me'];

type NavbarProps = WithTranslation;

function Navbar(props: NavbarProps) {
  const { t } = props;
  const [, pathname] = useRouter().pathname.split('/');

  return (
    <div className={styles.navbar}>
      {PAGES.map((page) => {
        return (
          <div key={page} className={pathname === page ? styles.active : null}>
            <Link href={`/${page}`}>
              <a>{t(page)}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default withTranslation('common')(Navbar);
