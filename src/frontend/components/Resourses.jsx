import { Link} from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../utils/data";
import './Resources.css';
import Footer from '../../layout/footer/Footer';

const BlogList = () => {
    return (
        <>
        <div className="bg-[#F3F1FC] blog" id="blog">
            <div className="flex flex-col md:max-w-[700px] mx-auto vlg:max-w-[1001px]">
                <div className="pt-8 px-6 md:pt-12 md:text-center md:flex md:flex-col md:items-center">
                    <h1 className="text-darkBlue text-2xl font-bold md:text-3xl vlg:text-4xl">
                         Our Tech News & Resources
                    </h1>
                    <p className="vlg:max-w-[700px] md:text-lg text-lightBlue mt-4">
                        News from the tech and telecoms sector in Nigeria
                    </p>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full blog-text">
                        {blogPosts.map((post) => (
                        <motion.div whileHover={{ scale: 1.05 }} key={post.id} className="p-4 border rounded-lg shadow-lg flex items-center gap-4">
                            <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded" />
                            <div>
                            <h2 className="text-xl font-bold text-darkBlue">{post.title}</h2>
                            <p className="text-gray-800 text-sm pt-4 pb-2 font-bold dtext">By {post.author} | ⏲ {post.date}</p>
                            <Link to={`/resourses/post/${post.id}`} className="text-darkBlue hover:underline text-sm">
                                Read More
                            </Link>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
  };
export default BlogList;

