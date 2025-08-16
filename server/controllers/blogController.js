import fs from 'fs';
import imagekit from '../configs/imagekit.js'
import { Blog } from '../models/blog.js';
import { Comment } from '../models/comment.js';
import { generateAIContent } from '../configs/gemini.js';

export const addBlog = async (req, res) => {
    try {
        const parsedBlog = JSON.parse(req.body.blog);
        let {title, subTitle, author, description, category, isPublished} = parsedBlog;
        

        const imageFile = req.file;

        // --- Validate required fields ---
        if (!title || !description || !category || !imageFile) {
            return res.status(400).json({ success: false, message: 'Missing required fields.' });
        }
        // --- Normalize isPublished to boolean ---
        isPublished = isPublished === 'true' || isPublished === true;

        // Uploading image on ImageKit.
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        //optimizing through imagekit URL transformation.
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, // Auto compression
                {format: 'webp'}, // Convert to modern format. All browser support
                {width: '1280'} // Width resizing.
            ]
        })

        fs.unlinkSync(imageFile.path); // Delete temp file
        
        

        await Blog.create({title, subTitle, author, description, category, image: optimizedImageUrl, isPublished})
        res.json({success: true, message: "Blog added successfully."})
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async (req, res) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId)
        if (!blog) {
            res.json({success: false, message: "Blog not found."})
        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        await Comment.deleteMany({blog: id});

        res.json({success: true, message: "Blog deleted successfully."})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({success: false, message: "Blog not found."});
        }
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: "Blog status updated."})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const addComment = async (req, res) => {
    try {
        const {blog , name, content} = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: "Comment added for review."})
        
    } catch (error) {
        res.json({success: false, message: error.message})

    }
}

export const getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }

}

export const generateContent = async(req, res) => {
    try {
        const {prompt} = req.body;
        const content = await generateAIContent(`${prompt} Generate a blog content for this topic in simple text format. `)
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
