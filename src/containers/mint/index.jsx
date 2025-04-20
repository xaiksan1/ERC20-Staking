import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MintCard from '../../components/mint/MintCard';

export default function Mint() {
  return (
    <Fragment>
      <Container>
        <Box sx={{ mb: 4 }}>
          <Typography
            color="primary.main"
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 1 }}
            component="div"
          >
            Fair Launch
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ...
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: 'neutral.main',
          py: 7,
          'inset-block-start': 1, // Use quotes for hyphenated keys
          'inset-block-end': 1, // Use quotes for hyphenated keys
          borderColor: 'grey.100',
          mb: 4,
        }} // Add missing closing > and remove extra }
      >
        <Container>
          <Typography
            color="text.primary"
            sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
            variant="h5"
          >
            Mint your NFT
          </Typography>
          <MintCard />
        </Container>
      </Box>
    </Fragment>
  );
}
