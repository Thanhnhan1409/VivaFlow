import { IonIcon, IonItem, IonLabel, IonList, IonModal } from '@ionic/react'
import React, { useState } from 'react'
import { ellipsisHorizontalOutline } from 'ionicons/icons';

function DisplayItem() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bargjHS0bbEvbcmCkoUHD649_T1AfqU6tQ&s"
        alt=""
        width={50}
        height={50}
        className="object-cover w-[50px] h-[50px] overflow-hidden rounded"
      />
      <div>
        <div>ONLY</div>
        <div className="text-sm text-grey">
          Artist
        </div>
      </div>
    </div>
  )
}

function SongItem() {

  const [isOpen, setIsOpen] = useState(false);

  const actionButtons = [
    {
      text: 
      <div className="py-2">
        <DisplayItem />
      </div>,
      action: "delete",
    },
    {
      text: 
      <div className="flex gap-2 items-center">
        <IonIcon icon={ellipsisHorizontalOutline} />
        <span>Add to Liked Songs</span>
      </div>,
      action: "share",
    },
    {
      text:
      <div className="flex gap-2 items-center">
        <IonIcon icon={ellipsisHorizontalOutline} />
        <span>Add to playlist</span>
      </div>,
      action: "cancel",
    },
  ];
  return (
    <div className="p-2 flex items-center justify-between bg-[#D9D9D9]/30 rounded-lg">
      <DisplayItem />
      <div>
        <IonIcon onClick={() => setIsOpen(true)} icon={ellipsisHorizontalOutline}></IonIcon>
        <IonModal
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          breakpoints={[0, 0.5, 1]}
          initialBreakpoint={0.5}
          className="custom-modal"
        >
          <IonList>
            {actionButtons.map((btn, index) => (
              <IonItem
                key={index}
                button
                onClick={() => {
                  console.log(`Bạn chọn: ${btn.action}`);
                  setIsOpen(false);
                }}
              >
                <IonLabel>{btn.text}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonModal>
      </div>
    </div>
  )
}

export default SongItem;
