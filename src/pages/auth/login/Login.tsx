import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import './Login.scss';
import { IonButton, IonButtons, IonInput } from '@ionic/react';
import CustomIonInput from '../../../components/customInput';
import { mainColor } from '../../../themes/constants';
import CustomDivider from '../../../components/customDivider';
import { useHistory } from 'react-router';

function Login() {
  const history = useHistory()
  const handleClick = () => {
    history.push("/register")
  }

  return (
    <div className="container login-container">
      {/* <img src={bgAuth} alt="Background" className="bg-image" /> */}
      <div className="overlay"></div>
      <div className="login-form flex flex-col h-full justify-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <img src={Logo} alt="VivaFlow" />
          <div className="text-xl font-bold text-white">Sign in to VivaFlow</div>
        </div>
        <form className="login-form flex flex-col gap-4">
          <div className='flex flex-col gap-4'>
            <CustomIonInput placeholder="Input your email" />
            <CustomIonInput placeholder="Input your password" />
          </div>
          <IonButtons slot="start">
            <IonButton color={mainColor} className="w-full py-2 bg-[#892FE0] text-white rounded-xl" expand="block">Sign in</IonButton>
          </IonButtons>
          <CustomDivider />
          <IonButtons slot="start">
            <IonButton className="w-full py-2 bg-white text-[#892FE0] rounded-xl" expand="block">
              Sign in with Google
            </IonButton>
          </IonButtons>
          <div className="text-white">
            Dont't have an account? <span onClick={handleClick} className="text-[#892FE0]">Sign up</span>
          </div>
        </form>
      </div>  
    </div>
  );
}

export default Login;