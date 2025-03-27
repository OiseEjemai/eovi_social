import { Client, Databases, ID } from "appwrite";
import { appwriteConfig, account, databases, storage, avatars } from "./appwrite";

interface IUSER {
    id: number;
    name: string;
    username?: string;
    photo_url?: string;
    is_premium?: boolean;
    isOnboarded: boolean;
}

export const createUser = async (tgUser: IUSER, bio: string) =>  {
    return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            Name: tgUser.name,
            Username: tgUser.username || "",
            Bio: bio || "",
            photo_url: tgUser.photo_url || "",
            TelegramID: tgUser.id.toString(),
            isPremium: tgUser.is_premium || false,
            isOnboarded: true,
            followers: [],
            following: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            posts: []
        }
    )
}