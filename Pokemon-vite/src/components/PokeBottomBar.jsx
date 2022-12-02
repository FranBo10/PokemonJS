import React from 'react'

const PokeBottomBar = () => {
  return (
    <div class='absolute bottom-0 h-20 w-full bg-black flex items-center justify-end pr-5'>
        <div class='flex grid-col-1 text-white cursor-pointer'>
            <p class='border-2 rounded-full p-1 mr-2 bg-white text-black items-center'>A</p>
            <p class='mr-2'>See Details</p>
        </div>

        <div class='flex text-white cursor-pointer'>
            <p class='border-2 rounded-full p-1 mr-2 bg-white text-black'>X</p>
            <p class='mr-2'>Habitat</p>
        </div>

        <div class='flex text-white cursor-pointer'>
            <p class='border-2 rounded-full p-1 mr-2 bg-white text-black content-center'>Y</p>
            <p class='mr-2'>Sort</p>
        </div>

        <div class='flex text-white cursor-pointer'>
            <p class='border-2 rounded-full p-1 mr-2 bg-white text-black'>+</p>
            <p class='mr-2'>See Evaluation</p>
        </div>

        <div class='flex  text-white cursor-pointer'>
            <p class='border-2 rounded-full p-1 mr-2 bg-white text-black'>B</p>
            <p class='mr-2'>Back</p>
        </div>
    </div>
  )
}

export default PokeBottomBar