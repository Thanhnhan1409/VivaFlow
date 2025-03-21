import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";

/* Core Ionic framework styles */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import HomePage from './pages/home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register';

/* Ionic Theme variables */
import "./themes/common.css";
import PlaySongItem from "./components/song/playSong";

setupIonicReact();

function App() {

  return (
    <IonApp>
      <IonReactRouter>
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/register"
          component={Register}
        />
        <Route
          path="/home/artist/:artistId"
          // component={ArtistPage}
        />
        <Route
          path="/home/album/:albumId"
          // component={AlbumDetail}
        />
        <Route
          path="/song/:songID"
          component={PlaySongItem}
        />
        <Route path="/home/search" />
        <Route
          path="/home"
          component={HomePage}
        />  
      </IonReactRouter>
    </IonApp>
  )
}

export default App
