import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Textarea,
} from "@/components/ui";

import { PostValidation } from '@/lib/validation/PostValidation';
import { useNavigate } from 'react-router-dom';
import FileUploader from '@/components/shared/FileUploader';


const Create = () => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: "",
      file: [],
      location: "",
      tags: ""
    }
  })

  const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
    console.log(value)
  }
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        {/* <img src="/assets/icons/add-post.svg" alt="create post" width={36} height={36} /> */}

        <h2 className='h3-bold md:h2-bold text-left w-full underline'>Create Post</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-9 w-full  max-w-5xl">
            <FormField
              control={form.control}
              name="caption"
              render={({ field }: any) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Caption</FormLabel>
                  <FormControl>
                    <Textarea
                      className="shad-textarea custom-scrollbar"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }: any) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Add Photos</FormLabel>
                  <FormControl>
                    <FileUploader
                      fieldChange={field.onChange}
                      mediaUrl={`/assets/icons/file-upload.svg`}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }: any) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Add Location</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }: any) => (
                <FormItem>
                  <FormLabel className="shad-form_label">
                    Add Tags (separated by comma " , ")
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Art, Expression, Learn"
                      type="text"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center justify-end">
              <Button
                type="button"
                className="shad-button_dark_4"
                onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="shad-button_primary whitespace-nowrap"
              >
                Post
              </Button>
            </div>
          </form>
        </Form>
      </div>


    </div>
  )
}

export default Create