import * as z from "zod"

export const PostValidation = z.object({
    caption:z.string().min(5, {message: "You've gotta have more than that to say, at least make it 5 characters" }).max(2200, {message: "Your message is too long, please keep it at 2200 characters. ;)"}),
    file:z.custom<File[]>(),
    location: z.string().min(1, {message: "OOPS! should be more than 1 character"}).max(1000, {message: "Nahhh, 1000 characters is the maximum."}),
    tage: z.string()
})

export const CommentValidation = z.object({
    content: z.string().min(2, {message: "Say more than 2 characters, come on you can do this"}).max(2200, {message: "2200 characters is more than enough don't you think? :)"})
})
