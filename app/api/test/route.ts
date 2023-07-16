import Prompt from "@models/Prompt"

export const GET = async (req, res) => {
    const prompts = await Prompt.find({})
    console.log(prompts)
    return new Response("this a new ")
}