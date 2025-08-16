import React from 'react';
import Moment from 'moment';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, index, fetchBlogs }) => {
    const { axios } = useAppContext();

    const deleteBlog = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
            try {
                const { data } = await axios.post('/api/blog/delete', { id });
                if (data.success) {
                    toast.success(data.message);
                    fetchBlogs();
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error("Error deleting blog:", error);
                toast.error("An error occurred while deleting the blog.");
            }
        }
    };

    const togglePublishStatus = async (id, isPublished) => {
        const performToggle = async () => {
            try {
                const { data } = await axios.post('/api/blog/toggle-publish', { id });
                if (data.success) {
                    toast.success(data.message);
                    fetchBlogs();
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error("Error toggling publish status:", error);
                toast.error("An error occurred while updating the blog status.");
            }
        };

        if (isPublished) {
            if (window.confirm("Are you sure you want to unpublish this blog? It will be moved to drafts.")) {
                await performToggle();
            }
        } else {
            await performToggle();
        }
    };

    return (
        <tr className='border-b text-gray-600'>
            <td className='py-4 px-2 xl:px-6'>{index}</td>
            <td className='py-4 px-2 font-semibold'>{blog.title}</td>
            <td className='py-4 px-2 max-sm:hidden'>{Moment(blog.createdAt).format('ll')}</td>
            <td className='py-4 px-2 max-sm:hidden'>
                <span className={`py-1 px-3 rounded-full text-xs ${blog.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.isPublished ? 'Published' : 'Draft'}
                </span>
            </td>
            <td className='py-4 px-2 flex items-center gap-4'>
                <button onClick={() => togglePublishStatus(blog._id, blog.isPublished)} className='text-blue-600 hover:underline cursor-pointer'>
                    {blog.isPublished ? 'Unpublish' : 'Publish'}
                </button>
                <img onClick={() => deleteBlog(blog._id)} src={assets.bin_icon} alt="delete" className='w-4 cursor-pointer' />
            </td>
        </tr>
    );
};

export default BlogTableItem;