'use client';
import BasicLayout from '@/components/templates/BasicLayout';
import StoreVisual from '@/components/molecules/StoreVisual';
import Price from '@/components/molecules/Price';

const LandingPage = () => {
  return (
    <BasicLayout title="LP サンプル">
      <StoreVisual />
      <Price />
    </BasicLayout>
  );
};

export default LandingPage;
