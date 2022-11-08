import { useAccount } from "@components/hooks/web3/useAccount";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";
import { getAllCourses } from "@content/courses/fetcher";

export default function Marketplace({ courses }) {
  const { account } = useAccount();

  return (
    <>
      <div className="py-4">
        <WalletBar address={account} />
        <CourseList courses={courses} />
      </div>
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
