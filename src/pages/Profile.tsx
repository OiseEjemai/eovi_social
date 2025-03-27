import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"

interface UserDetails {
  value: string | number;
  label: string;
}

const UserBlock = ({ value, label }: UserDetails) => (
  <div className="flex-center gap-2">
    <p className="small-semibold lg:body-bold text-center text-light-2 cursor-pointer hover:underline">{value}</p>
    <p className="small-medium lg:base-medium text-light-2">{label}</p>
  </div>
);

const posts = [
  {
    id: `post - ${1}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${2}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${3}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${4}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${5}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${6}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${7}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${8}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${9}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
  {
    id: `post - ${10}`,
    name: "Living the sweet life my boy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea, recusandae nam laboriosam architecto corrupti numquam odio aut, quia corporis fugit iure aliquam illo ipsam dolores expedita laborum eveniet quidem voluptates quod. Inventore, vero officia vitae soluta voluptas vel harum eum! Voluptates reprehenderit labore nulla a possimus laudantium nemo rerum?",
    image: "/assets/images/Banner.png"
  },
]

const Profile = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col items-center flex-1 gap-2 overflow-scroll py-10 px-5 md:p-14 custom-scrollbar'>
        <div className='flex items-center md:mb-1 xl:items-start gap-8 flex-col xl:flex-row relative max-w-5xl w-full'>
          <img src="/assets/images/joker.jpeg" alt="profile-pic" className='w-28 h-28 lg:h-36 lg:w-36 rounded-full' />
          <div className='flex flex-col px-3 text-center'>
            <h2 className='flex flex-row items-start text-[#e11d48] text-[24px] leading-[140%] tracking-tighter xl:text-left'>Kinamdeast <img src="/assets/icons/checkmark.svg" className='invert w-[1.33rem]' alt="verified" /></h2>
            <h3 className='text-sm font-normal leading-[140%] text-light-3 xl:text-left'>@kinamdeast</h3>
          </div>
          <div className="flex gap-8 items-center justify-center xl:justify-start w-full flex-wrap z-20">
            <UserBlock value={10} label="Posts" />
            <UserBlock value={`100M+`} label="Followers" />
            <UserBlock value={1} label="Following" />
          </div>
        </div>
        <p className="small-medium md:base-medium text-center xl:text-left max-w-screen-sm text-light-3 italic">
          Hello
        </p>

      </div>
    </div>
  )
}

export default Profile