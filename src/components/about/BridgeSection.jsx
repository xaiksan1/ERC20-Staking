import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BRIDGE_URL } from '../../constants/urls';
import PropTypes from 'prop-types';
/**
 * The BridgeSection component renders a section of the page dedicated to the "Bridge" feature.
 * It includes a title, descriptive text, and a button linking to the Poly Network bridge.
 * The section is styled using Material-UI components and is responsive to different screen sizes.
 *
 * Usage:
 * This component is used to provide users with information about the bridge functionality
 * and a call-to-action button to access the bridge.
 */
const BridgeSection = () => {
  return (
    <Box
      id="bridge"
      sx={{
        bgcolor: 'neutral.main',
        py: 7,
        insetBlockEnd: 1,
        borderColor: 'grey.100',
      }}
    >
      <Container>
        <Typography
          variant="h4"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 3 }}
        >
          Bridge
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 2,
            inlineSize: { xs: '100%', sm: '600px', md: '900px' },
          }}
        >
          <a href={BRIDGE_URL}>Link to Bridge</a>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, inlineSize: '900px' }}>
          Ensure to utilize the bridge for seamless transactions.
        </Typography>
        <Button
          component="a"
          href="https://bridge.poly.network/token/"
          target="_blank"
          rel="noopener noreferrer"
          disableElevation
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Bridge Now
        </Button>
      </Container>
    </Box>
  );
};
// Exporting BridgeSection as the default export because it represents a key section of the page
// and is intended to be used as a standalone component in the application.
export default BridgeSection;
BridgeSection.propTypes = {
  // Add any props here if needed in the future
};
// Currently, there are no props defined for this component, but it's a good practice to define them
// in case the component needs to accept any dynamic data or configuration in the future.
// This allows for better reusability and maintainability of the component.
// The component is designed to be self-contained and does not rely on any external state or props.
// This makes it easier to use in different parts of the application without needing to pass data down.
// The component is styled using Material-UI's system, which allows for responsive design and theming.
// The use of Material-UI components ensures that the design is consistent with the rest of the application.
// The component is also designed to be accessible, with appropriate use of semantic HTML elements
// and ARIA attributes where necessary.
// The use of the `Box` component from Material-UI allows for easy styling and layout control.
// The `Container` component is used to center the content and provide consistent padding.
// The `Typography` component is used for text elements, ensuring consistent font styles and sizes.
// The `Button` component is used for the call-to-action button, providing a consistent look and feel.
// The `ArrowForwardIcon` is used to indicate that the button will take the user to another page or action.
// The `sx` prop is used to apply custom styles to the components, allowing for easy customization
// The `href` attribute on the button allows for easy navigation to the bridge page.
// Opens the link in a new tab securely
// and is secure, preventing potential security vulnerabilities.
// The `disableElevation` prop on the button removes the shadow effect, providing a flat design.
// The `variant="contained"` prop on the button gives it a filled appearance, making it stand out.
// The `color` prop on the `Typography` components allows for easy customization of text colors,
// ensuring that the text is readable against the background.
// The `inlineSize` property in the `sx` prop is used to control the width of the text,
// ensuring that it doesn't exceed a certain size on larger screens.
// ensuring proper spacing between them.
