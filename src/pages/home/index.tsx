import React, { useState } from 'react'
import SongItem from '../../components/SongItem'
import './style.scss'
import { IonIcon, IonInput, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import CustomIonInput from '../../components/customInput'
import { search } from 'ionicons/icons'
import PlayListCardItem from '../../components/PlayList/CardItem'

enum SegmentEnum {
  Artist = "artist",
  Album = "album",
  Track = "track",
}

const labelItems = [ 'Recnet', 'Top 50', 'Chill', 'R&B' ]

function HomePage() {
  // const [segment, setSegment] = useState<SegmentEnum>(SegmentEnum.Artist)
  return (
    <div className="container home-container">
      {/* <SongItem /> */}
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Welcome back!</p>
        <p className="text-sm text-[#A5A5A5]">What do you feel like today?</p>
      </div>
      <div className="relative mt-8">
      <IonIcon 
        icon={search} 
        className="absolute z-10 top-1/2 left-3 text-[#A5A5A5] transform -translate-y-1/2" 
      />
        <CustomIonInput placeholder="Search for songs" />
      </div>
      <div className="flex gap-4 items-center mt-4 pb-1">
        {
          labelItems.map((item, index) => (
            <div key={index} className="segment-label active">
              {item}
            </div>
          ))
        }
      </div>
      <div className="flex items-start overflow-x-auto gap-4 w-full flex-nowrap py-4">
        <PlayListCardItem />
        <PlayListCardItem />
        <PlayListCardItem />
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold my-4">Your favorites</div>
        <div className="flex flex-col gap-4">
          {
            Array.from({ length: 10 }).map((_, index) => (
              <SongItem key={index} />
            ))
          }
        </div>
      </div>
    </div>
  ) 
}

export default HomePage
