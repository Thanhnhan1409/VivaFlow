import React from 'react'

function PlayListCardItem() {
  return (
    <div className="flex flex-col gap-2 w-[208px] flex-shrink-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bargjHS0bbEvbcmCkoUHD649_T1AfqU6tQ&s"
        alt="album"
        width={208}
        height={208}
        className="w-[208px] h-[208px] object-cover rounded-lg"
      />
      <div className="pl-2">
        <p className="text-lg">R&B Playlist</p>
        <p className="text-sm text-[#a5a5a5]">Chill your mind</p>
      </div>
      
    </div>
  )
}

export default PlayListCardItem
