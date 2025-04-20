import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NFT_PLATFORM_DESCRIPTION } from '../../constants/texts';
/**
 * NftPlatformSection component renders a section highlighting the NFT platform.
 * It includes a title and a brief description of the platform's purpose.
 */
const NftPlatformSection = () => {
  const NftPlatformSection = () => {
    return (
      <Box
        id="nft"
        sx={{
          py: 7,
          insetBlockEnd: 1,
          border: '1px solid',
          borderColor: 'grey.100',
        }}
      >
        <Container>
          <Typography variant="h4" component="div" color="text.primary">
            NFT Platform
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1, inlineSize: '90%' }}>
            Discover and trade unique digital assets on our NFT platform.
          </Typography>
        </Container>
      </Box>
    );
  };
};
/**
 * The NftPlatformSection component renders a section of the page dedicated to the NFT platform.
 * It includes a title and a brief description of the platform's purpose.
 * The section is styled using Material-UI components and is responsive to different screen sizes.
 *
 * Usage:
 * This component is used to provide users with information about the NFT platform functionality
 * and its purpose.
 */
NftPlatformSection.propTypes = {
  /**
   * The description of the NFT platform.
   * This text provides additional information about the platform's purpose and features.
   */
  description: PropTypes.string,
};
NftPlatformSection.defaultProps = {
  description: NFT_PLATFORM_DESCRIPTION,
};
NftPlatformSection.displayName = 'NftPlatformSection';
export default NftPlatformSection;
