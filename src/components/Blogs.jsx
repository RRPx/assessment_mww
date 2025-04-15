import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://hr.mediusware.xyz/api/website/blogs/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <>
      {blogs.results?.map((item) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={item.id}
        >
          <img
            className="w-full"
            src="src\assets\Blog\mobile_image.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {item.author.full_name}
            </div>
            <div className="font-bold text-xl mb-2">
              {item.created_at.toLocaleString()}
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
