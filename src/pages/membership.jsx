import MembershipScreen from "@/components/screens/membership/membership";
import Head from "next/head";

const MembershipPage = () => {
  return (
    <>
      <Head>
        <title>Membership | SIAWED</title>
        <meta name="description" content="Become a member of SIAWED and enjoy exclusive benefits." />
      </Head>
      <MembershipScreen />
    </>
  );
};

export default MembershipPage;
