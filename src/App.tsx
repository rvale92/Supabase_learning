import { useEffect, useState } from 'react';
import { initializeCertifications, initializeTopics } from './utils/initializeData';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import CertificationList from './components/CertificationList';
import Header from './components/Header';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initializeData() {
      try {
        setInitializing(true);
        const certifications = await initializeCertifications();
        if (certifications) {
          await initializeTopics(certifications);
        }
        setInitializing(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setInitializing(false);
      }
    }

    initializeData();
  }, []);

  if (initializing) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <CertificationList />
      </Container>
    </>
  );
}

export default App;
