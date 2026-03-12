import React from 'react';
import OnboardingFlow from '../components/OnboardingFlow';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { setUser, showToast } = useAppContext();

  const handleComplete = (userData) => {
    setUser(userData);
    showToast('Welcome to GroupSync!', 'success');
    navigate('/dashboard');
  };

  return <OnboardingFlow onComplete={handleComplete} />;
}
