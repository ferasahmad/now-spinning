import WithAuth from "@/hoc/withAuth";
import HomeClient from "./HomeClient";

export default function ProtectedHomePage() {
  return (
    <WithAuth>
      <HomeClient />
    </WithAuth>
  );
}
