import cloudinary from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNARY_API_KEY, 
    api_secret:  process.env.CLOUDNARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.Uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        console.log("File uploaded on Cloudinary. File src: " + response.url);
        // once the file is uploaded we want to delete it from our server
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteFromCloudinary = async (publiId) => {
    try{
        const result = cloduinary.uploader.destroy(publiId)
        console.log("Deleted from cloudindary, Public ID: ", publiId);
        
    }catch(error){
        Console.log("Error deleting from Cloudinary ", error)
        return null
    }
}


export {uploadOnCloudinary, deleteFromCloudinary}