import User from "../models/user.model";

import Message from "../models/message.model";
import cloudinary from "../lib/cloudinary";


const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = await User.find({_id: {$ne: loggedInUserId}});
        res.status(200).json(filterUsers);
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}
const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user._id;
        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        });
        newMessage.save();
        res.status(201).json(newMessage)


    } catch(error){
        res.status(500).json({error: "Internal server error"})
    }
}

export {getUserForSidebar, getMessages, sendMessage}