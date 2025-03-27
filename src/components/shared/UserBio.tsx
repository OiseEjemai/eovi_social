import React, { useEffect, useState } from 'react'
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

import { BioValidation } from '@/lib/validation/BioValidation';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@/lib/appwrite/api';
import FileUploader from '@/components/shared/FileUploader';

interface TelegramUser {
    id: number;
    name: string;
    username: string;
    photo_url: string;
    is_premium: boolean;
}

const OnboardingUser = () => {
    const [tgUser, setTgUser] = useState<TelegramUser | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof BioValidation>>({
        resolver: zodResolver(BioValidation),
        defaultValues: {
            bio: "",
        }
    })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tgData = window.Telegram?.WebApp?.initDataUnsafe?.user;
            if (tgData) {
                setTgUser({
                    id: tgData.id,
                    name: tgData.first_name,
                    username: tgData.username,
                    photo_url: tgData.photo_url,
                    is_premium: tgData.is_premium,
                });
            }
        }
    }, []);

    const handleSubmit = async (value: z.infer<typeof BioValidation>) => {
        if (!tgUser) return;
        setIsLoading(true)

        try {
            await createUser(tgUser, value.bio);
            navigate('/profile')
        } catch (error) {
            console.error('Error saving user: ', error)
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='flex flex-1'>
            <div className='common-container'>
                {/* <img src="/assets/icons/add-post.svg" alt="create post" width={36} height={36} /> */}

                <h2 className='h3-bold md:h2-bold text-left w-full underline'>Finalize User Creation</h2>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col gap-9 w-full  max-w-5xl">
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }: any) => (
                                <FormItem>
                                    <FormLabel className="shad-form_label">Bio</FormLabel>
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
                                disabled={isLoading}
                            >
                                {isLoading ? <img src="/assets/icons/loader.svg" alt="loading" width={8} height={8} /> : 'Complete Profile'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>


        </div>
    )
}

export default OnboardingUser