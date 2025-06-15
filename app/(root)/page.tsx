import Account from "@/component/Account";
import Clientele from "@/component/Clientele";
import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Hero />
      <Clientele />
      <section className="max-w-screen-xl mx-auto px-[5%] xl:px-0">
        <section>
          <p className="my-4 md:my-8 lg:my-10 xl:my-12 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Clout Jet Key features</p>
          <p className="text-base md:text-xl mx-auto w-auto md:w-[550px] font-semibold text-center mb-4 md:mb-8 lg:mb-10 xl:mb-12">This platform is made secured, stress free and easy to use. Payments are released once both parties confirms</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-10 md:mb-12 lg:mb-16 xl:mb-20">
            <Feature
              name="Verified Listing"
              desc="All merchants are verified and cannot manipulate ID"
            />
            <Feature
              name="User to user transaction"
              desc="All merchants are verified and cannot manipulate"
            />
            <Feature
              name="Diverse categories"
              desc="All merchants are verified and cannot manipulate ID"
            />
            <Feature
              name="Secure Payment system"
              desc="All merchants are verified and cannot manipulate ID"
            />
          </div>
        </section>
        <section>
          <p className="my-4 md:my-6 lg:my-10 xl:my-12 text-center text-xl md:text-2xl lg:text-3xl w-auto md:w-[300px] lg:w-[425px] font-semibold mx-auto">Get Social Media Accounts from any country in the world</p>
          <p className="text-base md:text-xl mx-auto font-semibold mb-4 md:mb-6 lg:mb-10 xl:mb-14 w-auto md:w-[600px]">Social media accounts from across the globe and they all meet your specifications. You can also sell to others on our platform </p>
          <Image 
            src="/map-image.svg"
            alt="map image"
            className="w-full max-w-screen-xl block mb-4 md:mb-6 lg:mb-10 xl:mb-12"
            width={1280}
            height={400}
          />
          <button className="mb-4 md:mb-6 lg:mb-10 xl:mb-12 py-2 rounded-md max-w-[400px] w-[70%] block mx-auto bg-[#17223b] text-white">Purchase an account</button>
        </section>
        <section className="py-6 md:py-8 lg:py-10">
          <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Available Facebook Account</p>
          <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out Available accounts with their individual details </p>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <Account
            image="/facebook2.svg"
            title="Germany FB"
            desc="German standard Account with 50k plus friends welcomes dating and others relationship"
            flag="/flag-germany.svg"
          />
          <Account
            image="/facebook2.svg"
            title="Germany FB"
            desc="German standard Account with 50k plus friends welcomes dating and others relationship"
            flag="/flag-germany.svg"
          />
          <Account
            image="/facebook2.svg"
            title="Germany FB"
            desc="German standard Account with 50k plus friends welcomes dating and others relationship"
            flag="/flag-germany.svg"
          />
          <Account
            image="/facebook2.svg"
            title="Germany FB"
            desc="German standard Account with 50k plus friends welcomes dating and others relationship"
            flag="/flag-germany.svg"
          />
          <Account
            image="/facebook2.svg"
            title="Germany FB"
            desc="German standard Account with 50k plus friends welcomes dating and others relationship"
            flag="/flag-germany.svg"
          />
          </div>
          <div className="flex flex-row justify-end mt-4 md:mt-6 lg:mt-8">
            <button className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">View all</button>
          </div>
        </section>
        <section className="py-6 md:py-8 lg:py-10">
          <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Available Instagram Account</p>
          <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out Available accounts with their individual details </p>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Account
              image="/instagram2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/instagram2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/instagram2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/instagram2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/instagram2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
          </div>
          <div className="flex flex-row justify-end mt-4 md:mt-6 lg:mt-8">
            <button className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">View all</button>
          </div>
        </section>
        <section className="py-6 md:py-8 lg:py-10">
          <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Available Youtube Account</p>
          <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out Available accounts with their individual details </p>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Account
              image="/youtube.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/youtube.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/youtube.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/youtube.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
            <Account
              image="/youtube.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              flag="/flag-germany.svg"
            />
          </div>
          <div className="flex flex-row justify-end mt-4 md:mt-6 lg:mt-8">
            <button className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">View all</button>
          </div>
        </section>
        <section className="py-6 md:py-8 lg:py-10">
          <p className="my-3 md:my-4 lg:my-5 xl:my-6 text-center text-xl md:text-2xl lg:text-3xl font-semibold">Available Tiktok Account</p>
          <p className="mb-4 md:mb-6 lg:mb-8 lg:mb-10 text-center font-semibold text-xl">Check out Available accounts with their individual details </p>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Account
              image="/tiktok2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              // flag="/flag-germany.svg"
            />
            <Account
              image="/tiktok2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              // flag="/flag-germany.svg"
            />
            <Account
              image="/tiktok2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              // flag="/flag-germany.svg"
            />
            <Account
              image="/tiktok2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              // flag="/flag-germany.svg"
            />
            <Account
              image="/tiktok2.svg"
              title="Germany FB"
              desc="German standard Account with 50k plus friends welcomes dating and others relationship"
              // flag="/flag-germany.svg"
            />
          </div>
          <div className="flex flex-row justify-end mt-4 md:mt-6 lg:mt-8">
            <button className="py-2 px-8 rounded-md text-white bg-[#1d1c1c]">View all</button>
          </div>
        </section>
      </section>
    </>
  );
}
