import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { withTranslation, i18n } from '../i18n';
import { WithTranslation } from 'next-i18next';

type HomeProps = WithTranslation;
function Home(props: HomeProps) {
  const { t } = props;

  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>{t('dev')}</p>
        <p>
          <Link href="/posts/bio">
            <a>About me</a>
          </Link>
        </p>
        <button onClick={() => i18n.changeLanguage('hu')}>Change language</button>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
export default withTranslation('common')(Home);
