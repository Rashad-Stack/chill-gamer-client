import { useLoaderData } from "react-router";

export default function DetailBlog() {
  const blog = useLoaderData();

  return (
    <section>
      <div className="container lg:max-w-7xl mx-auto max-xl:px-4 my-8 space-y-4">
        <h1 className="text-4xl font-bold dark:text-white">{blog.title}</h1>
        <p className="text-gray-500">{blog.date}</p>
        <img src={blog.image} alt={blog.title} className="w-full h-auto my-4" />
        <div className="prose max-w-none text-gray-500">
          <p>{blog.article}</p>
        </div>
      </div>
    </section>
  );
}
