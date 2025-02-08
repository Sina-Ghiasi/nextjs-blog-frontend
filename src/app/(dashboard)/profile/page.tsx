import { Card } from "@/components/dashboard/Card";
import { fetchDashboardStats } from "@/lib/data";

export default async function ProfilePage() {
  const stats = await fetchDashboardStats();
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card title="کاربران" count={stats.users} type="users" />
        <Card title="پست ها" count={stats.posts} type="posts" />
        <Card title="نظرات" count={stats.comments} type="comments" />
      </div>
    </>
  );
}
