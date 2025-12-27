import { GradientText, NavigationButton } from "../atoms";
import { Dots1Png } from "../../assets";
import { BlogCard } from "../molecules";
import { useState } from "react";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 3;

  const allBlogs = [
    {
      title: "How AI is Revolutionizing Document Management for Enterprises",
      datePosted: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      datePosted: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title:
        "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      datePosted: "24 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title: "Machine Learning in Financial Document Processing",
      datePosted: "20 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title: "Automated Compliance Monitoring Solutions",
      datePosted: "18 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
    {
      title: "Digital Transformation in Banking Industry",
      datePosted: "15 July, 2023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    },
  ];

  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="pt-2.75 relative">
      <img
        src={Dots1Png}
        alt="Decorative dots"
        className="absolute top-0 left-12.5 z-0"
      />
      <div className="text-center mb-15">
        <h2 className="font-raleway font-semibold text-5xl leading-[100%] tracking-[-1px] text-center text-[#141219] mb-4">
          Blogs
        </h2>
        <pre className="font-manrope font-normal text-2xl text-center mx-auto">
          <GradientText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. {"\n"}Lorem Ipsum has been the industry's standard.
          </GradientText>
        </pre>
      </div>

      <div className="overflow-hidden px-27.5 mb-11.25">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            return (
              <div
                key={pageIndex}
                className={`w-full shrink-0 transition-opacity duration-400 ease-in-out ${
                  currentPage == pageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allBlogs
                    .slice(
                      pageIndex * blogsPerPage,
                      (pageIndex + 1) * blogsPerPage
                    )
                    .map((blog, index) => (
                      <BlogCard
                        key={`${pageIndex}-${index}`}
                        title={blog.title}
                        datePosted={blog.datePosted}
                        description={blog.description}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2.5">
        <NavigationButton
          onClick={handlePrevious}
          isDisabled={currentPage === 0}
        >
          ←
        </NavigationButton>
        <NavigationButton
          onClick={handleNext}
          isDisabled={currentPage === totalPages - 1}
        >
          →
        </NavigationButton>
      </div>
    </section>
  );
};

export default Blogs;
