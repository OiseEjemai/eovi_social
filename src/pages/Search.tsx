import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='flex flex-col flex-1 gap-10 overflow-scroll items-center py-10 px-5 md:p-14'>
      <div className='max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9'>
        <div className='flex flex-row gap-1 px-4 text-center w-full bg-dark-4 rounded-lg'>
          <img
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="search"
          />
          <Input
            type="text"
            name='search'
            value={searchValue}
            className="search-input"
            placeholder='Search'
            onChange={(e) => {
              const { value } = e.target
              setSearchValue(value)
            }} />
        </div>
      </div>
      <div className='search-history flex flex-col w-full gap-3'>
        <h1 className='font-semibold '>Recent Searches</h1>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-extralight cursor-pointer hover:underline'>Oise</h2>
          <img src="/assets/icons/delete.svg" alt="" className='px-4 cursor-pointer' />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-extralight cursor-pointer hover:underline'>Anime</h2>
          <img src="/assets/icons/delete.svg" alt="" className='px-4 cursor-pointer' />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-extralight cursor-pointer hover:underline'>Kinamdeast</h2>
          <img src="/assets/icons/delete.svg" alt="" className='px-4 cursor-pointer' />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-extralight cursor-pointer hover:underline'>NYSC</h2>
          <img src="/assets/icons/delete.svg" alt="" className='px-4 cursor-pointer' />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='font-extralight cursor-pointer hover:underline'>Opinion</h2>
          <img src="/assets/icons/delete.svg" alt="" className='px-4 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Search