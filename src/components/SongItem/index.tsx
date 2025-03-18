import { IonIcon, IonItem, IonLabel, IonList, IonModal } from '@ionic/react'
import React, { useState } from 'react'
import { ellipsisHorizontalOutline } from 'ionicons/icons';

function DisplayItem() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>ONLY</div>
        <div>
          <div>Artist</div>
          <div>Song</div>
        </div>
      </div>
    </div>
  )
}

function SongItem() {

  const [isOpen, setIsOpen] = useState(false);

  const actionButtons = [
    {
      text: <strong style={{ color: "red" }}>❌ Delete</strong>,
      action: "delete",
    },
    {
      text: <span style={{ color: "blue" }}>📤 Share</span>,
      action: "share",
    },
    {
      text: <span style={{ color: "gray" }}>❌ Cancel</span>,
      action: "cancel",
    },
  ];
  return (
    <div className="container flex items-center justify-between">
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
