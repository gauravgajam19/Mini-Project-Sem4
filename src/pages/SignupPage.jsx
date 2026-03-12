import React from 'react';
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  return <Signup onNavigate={(page) => navigate(`/${page}`)} />;
}
