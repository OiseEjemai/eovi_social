import * as z from "zod"


export const BioValidation = z.object({
    bio: z.string().min(2, {message: "Say more than 2 characters, come on you can do this"}).max(2200, {message: "2200 characters is more than enough don't you think? :)"})
})