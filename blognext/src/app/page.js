
import HeroSection from "@/app/components/HeroSection"
import blog from "@/app/components/blog"
import Footer from "@/app/components/Footer"

const page = () => {
  return (
    <div>
      <HeroSection/>
     < blog blogItems={blogItems}/>
      <Footer/>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch blog items from your API
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-list/2');
  const blogItems = await res.json();

  return {
      props: {
          blogItems
      }
  };
}

export default page;

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const IndexPage = ({ blogItems }) => {
    return (
        <div>
            <Header />
            <BlogSection blogItems={blogItems} />
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch blog items from your API
    const res = await fetch('YOUR_API_ENDPOINT');
    const blogItems = await res.json();

    return {
        props: {
            blogItems
        }
    };
}

export default IndexPage;
