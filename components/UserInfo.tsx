'use client';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '@/store/slices/userSlice';
import { RootState } from '@/store/store';
import {
  Button,
  Typography,
  Box,
  CircularProgress,
  Paper,
} from '@mui/material';
import { UserCircle } from 'lucide-react';

export default function UserInfo() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleFetchUser = () => {
    dispatch(fetchUserData('123') as any);
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Button
        variant="contained"
        onClick={handleFetchUser}
        startIcon={<UserCircle />}
        sx={{ mb: 2 }}
      >
        Fetch User Info
      </Button>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {data && (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            User Information
          </Typography>
          <Typography>Name: {data.name}</Typography>
          <Typography>Email: {data.email}</Typography>
          <Typography>Role: {data.role}</Typography>
        </Paper>
      )}
    </Box>
  );
}