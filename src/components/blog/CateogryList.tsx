import { getPostCategoryList } from "@/services/postServices";
import Link from "next/link";

export default async function CategoryList() {
  const categoryList = await getPostCategoryList();

  return (
    <ul className="space-y-3">
      <li>
        <Link href={`/blogs/`}>همه</Link>
      </li>
      {categoryList.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
