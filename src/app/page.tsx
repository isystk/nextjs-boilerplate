'use client';
import BasicLayout from '@/components/templates/BasicLayout';

const Index = () => {
  return (
    <BasicLayout title="Index Page">
      <div className="flex flex-col justify-center items-center px-4 py-16 bg-white min-h-[100vh]">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#2c3e50]">Index Page</h1>
        <ul className="flex flex-col gap-6 list-none p-0 m-0">
          <li>
            <a
              href="/shop"
              className="inline-block px-8 py-4 bg-white text-[#333] text-xl font-semibold rounded-xl no-underline shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#f0f4f8]"
            >
              🛒 LaraEC
            </a>
          </li>
          <li>
            <a
              href="/lp"
              className="inline-block px-8 py-4 bg-white text-[#333] text-xl font-semibold rounded-xl no-underline shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#f0f4f8]"
            >
              📄 Landing Page
            </a>
          </li>
        </ul>
      </div>
    </BasicLayout>
  );
};

export default Index;
