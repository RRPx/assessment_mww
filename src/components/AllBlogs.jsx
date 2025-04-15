import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    fetch("https://hr.mediusware.xyz/api/website/blogs/categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogCategories(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl text-white bg-[#0060AF]  `}
          >
            All{" "}
            <span
              className={`px-[6px] py-1  rounded-lg ms-1  text-[#008F79] bg-[#EAECF0] h-[20px] `}
            >
              {blogCategories?.length}
            </span>
          </button>
        </div>
        {blogCategories?.map((item) => (
          <div>
            <button
              className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
            >
              {item.name}{" "}
              <span
                className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}
              >
                {item.total_blog}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
