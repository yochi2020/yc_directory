"use client";
import React from 'react'
import SearchFormReset from './SearchFormReset';
import { Search } from "lucide-react"
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action={"/"} className='search-form'>
      <input
        placeholder='Search Startup'
        className='search-input' name='query' defaultValue={query} />
      <div className='flex gap-2'>
        {query && (
          <SearchFormReset />
        )}
        <button type='submit' className=" text-white search-btn">
          <Search className='size-5' />
        </button>
      </div>
    </form>
  )
}

export default SearchForm