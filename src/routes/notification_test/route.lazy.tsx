import { useCallback } from 'react';

import { Button, Container } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useSnackbar } from 'notistack';

const NotificationTestPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickNotification = useCallback(() => {
    enqueueSnackbar('This is a notification message!', { variant: 'info' });
  }, [enqueueSnackbar]);

  const handleClickSuccess = useCallback(() => {
    enqueueSnackbar('This is a success message!', { variant: 'success' });
  }, [enqueueSnackbar]);

  const handleClickWarning = useCallback(() => {
    enqueueSnackbar('This is a warning message!', { variant: 'warning' });
  }, [enqueueSnackbar]);

  const handleClickError = useCallback(() => {
    enqueueSnackbar('This is an error message!', { variant: 'error' });
  }, [enqueueSnackbar]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: 4,
        alignItems: 'center',
      }}
    >
      <Button onClick={handleClickNotification}>Show Notification</Button>
      <Button onClick={handleClickSuccess}>Show Success Notification</Button>
      <Button onClick={handleClickWarning}>Show Warning Notification</Button>
      <Button onClick={handleClickError}>Show Error Notification</Button>
    </Container>
  );
};

export const Route = createLazyFileRoute('/notification_test')({
  component: NotificationTestPage,
});
