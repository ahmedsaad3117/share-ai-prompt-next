import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";
//GET 

export const GET = async (req: any, { params }: any) => {
    await connectToDB()
    try {
        const prompt = await Prompt.findById(params.id).populate('creator')

        if (!prompt) return new Response("Prompt not found!", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (err) {
        console.log(err)
        return new Response("Failed to fetech prompt", { status: 500 })
    }
}


//PATCH
export const PATCH = async (req: any, { params }: any) => {
    const {prompt, tag} = await req.json()
    try {
        await connectToDB()
        const prompt = await Prompt.findByIdAndUpdate(params.id,{...req.body}).populate('creator')
        console.log(prompt)

        if (!prompt) return new Response("Prompt not found!", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (err) {
        return new Response("Failed to fetech prompt", { status: 500 })
    }
}

//DELETE