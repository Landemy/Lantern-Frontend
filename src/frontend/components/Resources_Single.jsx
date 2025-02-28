import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../utils/data";
import './Resources.css';
import Footer from '../../layout/footer/Footer';

const BlogPost = () => {
    const { postId } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(postId));
    if (!post) return <p>Post not found.</p>;
  
    return (
        <>
        <div className="bg-[#F3F1FC] blog" id="blog">
            <div className="flex flex-col md:max-w-[700px] mx-auto vlg:max-w-[1001px]">
                <div className="pt-8 px-6 md:pt-12 md:text-center md:flex md:flex-col md:items-center">
                    <div className="w-full min-h-screen">
                        <div className="p-6 max-w-4xl mx-auto single-post">
                        <h1 className="text-3xl font-bold mb-4 text-darkBlue">{post.title}</h1>
                        <p className="text-gray-800 text-sm pb-2 font-bold dtext">By {post.author} | ⏲ {post.date}</p>
                        <img src={post.image} alt={post.title} className="w-full h-96 object-cover pb-3" />
                        <p className="text-gray-700 text-lg content pb-2">{post.content1}</p>
                        <p className="text-gray-700 text-lg content pb-2">{post.content2}</p>
                        <p className="text-gray-700 text-lg content">{post.content3}</p>
                        <Link to="/resourses" className="text-darkBlue hover:underline mt-4 block">⬅ Back to Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
  };

  export default BlogPost;
  