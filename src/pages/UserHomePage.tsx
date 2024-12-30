import CardWorkspaces from "@/components/atoms/CardWorkspaces";
import { Button } from "@/components/ui/button";


const UserHomePage = () => {
  return (
    <section className="container m-10 gap-5 h-auto w-full flex flex-wrap">
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
      <CardWorkspaces />
    </section>
  );
};

export default UserHomePage;
