import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import WalletIcon from '../ui/icons/Wallet';

/**
 * The Unauthenticated component renders a button for wallet connection
 * and manages the state for displaying WalletProviders.
 */
const Unauthenticated = () => {
  const [isWalletProvidersDialogOpen, setIsWalletProvidersDialogOpen] = useState(false);

  const handleWalletProvidersDialogToggle = () => {
    setIsWalletProvidersDialogOpen(!isWalletProvidersDialogOpen);
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        fullWidth
        onClick={handleWalletProvidersDialogToggle}
        sx={(theme) => ({ boxShadow: theme.shadows[4] })}
      >
        <WalletIcon />
        Connect Wallet
      </Button>
      <WalletProviders
        walletProvidersDialogOpen={isWalletProvidersDialogOpen}
        handleWalletProvidersDialogToggle={handleWalletProvidersDialogToggle}
      />
    </Fragment>
  );
};

export default Unauthenticated;
