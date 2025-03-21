import React, { FC } from 'react'
import './style.scss'
import Song_Cover from '../../../assets/images/rose_album.jpg'
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, ellipsisHorizontalOutline, heartOutline, pauseCircle, playCircle, playSkipBack, playSkipForward, reload, shuffle } from 'ionicons/icons';
import { getPercent, seconds_to_mm_ss } from '../../../utils';

const ProgressBar: FC<{
  currentTime: number
  duration: number
  onChangeProgress: (newProgress: number) => void
  mini?: boolean
}> = ({ currentTime, duration, onChangeProgress, mini }) => {
  const seekBarRef = React.useRef<HTMLDivElement>(null)

  const handleSeekBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const offset = e.nativeEvent.offsetX
      const width = e.currentTarget.clientWidth

      const _percent = getPercent(offset, width)

      onChangeProgress(_percent)
  }

  return (
      <div className="w-full" style={{ paddingBlock: mini ? "0" : "1rem" }}>
          <div
              className="__seek-bar min-w-full bg-gray-700 h-[6px] rounded-3xl cursor-pointer"
              onClick={handleSeekBarClick}
              ref={seekBarRef}
          >
              <div
                  className="w-0 h-full rounded-3xl bg-ongakool"
                  style={{
                      width:
                          currentTime && duration
                              ? `${getPercent(currentTime, duration)}%`
                              : "0%",
                  }}
              ></div>
          </div>
          <div className="w-full text-xs flex justify-between py-2">
              <span>{seconds_to_mm_ss(currentTime)}</span>
              <span>{seconds_to_mm_ss(duration)}</span>
          </div>
      </div>
  )
}


function PlaySongItem() {
  return (
    <div className="container song-container flex flex-col gap-6">
      <div className="flex justify-between mb-4 mt-10">
        <IonIcon className="text-lg" icon={chevronBackOutline} />
        <IonIcon className="text-lg" icon={ellipsisHorizontalOutline} />
      </div>
      <div className="w-full flex justify-center">
        <img className="w-full rounded-lg" src={Song_Cover} alt="song" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">You Right</p>
          <p className="text-[#a5a5a5]">Doja Cat, The Weeknd</p>
        </div>
        <IonIcon className="text-2xl" icon={heartOutline} />
      </div>
      <ProgressBar
          currentTime={1232}
          duration={123 || 0}
          onChangeProgress={(newValue) => {
              const newTime = (newValue * (123 || 0)) / 100
              // store.setCurrentTime(newTime)
              // audioRef.current?.fastSeek(newTime)
          }}
      />
      <div className="flex items-center justify-between">
        <IonIcon icon={shuffle} className="text-2xl" />
        <div className="flex items-center justify-between gap-8">
          <IonIcon icon={playSkipBack} className="text-4xl" />
            {
              true ? (
                <IonIcon icon={pauseCircle} className="text-4xl" />
              ) : (
                <IonIcon icon={playCircle} className="text-4xl" />
              )
            }
          <IonIcon icon={playSkipForward} className="text-4xl" />
        </div>
        <IonIcon icon={reload} className="text-2xl" />
      </div>
    </div>
  )
}

export default PlaySongItem;
