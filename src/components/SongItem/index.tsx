import { IonActionSheet, IonButton } from '@ionic/react'
import React from 'react'

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
  return (
    <div className="flex items-center justify-between">
      <DisplayItem />
      <div>
      <IonButton id="open-action-sheet">Open</IonButton>
      {/* <IonActionSheet
        trigger="open-action-sheet"
        header={<div>hhehehe</div>}
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      >

      </IonActionSheet> */}
      </div>
    </div>
  )
}

export default SongItem;
