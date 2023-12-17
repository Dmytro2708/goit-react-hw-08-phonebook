import { RiContactsBookLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1 style={styles.title}>Create your contact book</h1>
      <RiContactsBookLine fill="#ff923cba" fontSize="2em" />
    </div>
  );
};

export default HomePage;
