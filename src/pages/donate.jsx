import Head from "next/head";
import DonateScreen from "@/components/screens/donate/donate";

const DonatePage = () => {
  return (
    <>
      <Head>
        <title>Donate | SIAWED</title>
        <meta name="description" content="Support SIAWED by making a donation. Your contribution helps empower women entrepreneurs." />
      </Head>
      <DonateScreen />
    </>
  );
};

export default DonatePage;
