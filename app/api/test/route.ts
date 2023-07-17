import Prompt from "@models/Prompt"

export const GET = async (req ) => {
    const prompts = await Prompt.find({}).populate('creator')
    console.log(prompts)
    
    return new Response("this a new ")
}
