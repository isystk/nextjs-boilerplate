'use client';
import BasicLayout from '@/components/templates/BasicLayout';
import Globe from '@/components/atoms/Globe';

const Index = () => {
  return (
    <BasicLayout title="Index Page">
      <div className="h-[100vh] p-16">
        <p className="text-black font-bold text-3xl text-center mb-16">Index Page</p>
        <div className="px-5 flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 md:pr-5">
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
          <div className="w-full md:w-1/2">
            <Globe />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Index;
