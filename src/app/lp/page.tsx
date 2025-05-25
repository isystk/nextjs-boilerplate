'use client';
import BasicLayout from '@/components/templates/BasicLayout';
import StoreVisual from '@/components/molecules/StoreVisual';
import Price from '@/components/molecules/Price';
import News from '@/components/molecules/News';
import Footer from '@/components/organisms/Footer';

const LandingPage = () => {
  return (
    <BasicLayout title="LP サンプル">
      <StoreVisual />
      <Price />
      <div className="h-48"></div>
      <News
        items={[
          {
            date: '2025.01.01',
            title: 'タイトル1',
            text: 'テキストテキストテキストテキストテキストテキスト',
            imageUrl: 'https://picsum.photos/200/300',
          },
          {
            date: '2025.02.01',
            title: 'タイトル2',
            text: 'テキストテキストテキストテキストテキストテキスト',
            imageUrl: 'https://picsum.photos/200/300',
          },
          {
            date: '2025.03.01',
            title: 'タイトル3',
            text: 'テキストテキストテキストテキストテキストテキスト',
            imageUrl: 'https://picsum.photos/200/300',
          },
          {
            date: '2025.04.01',
            title: 'タイトル4',
            text: 'テキストテキストテキストテキストテキストテキスト',
            imageUrl: 'https://picsum.photos/200/300',
          },
        ]}
      />
      <Footer />
    </BasicLayout>
  );
};

export default LandingPage;
