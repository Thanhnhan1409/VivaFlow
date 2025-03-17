import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import './style.scss';
import { IonButton, IonButtons, IonInput } from '@ionic/react';
import CustomIonInput from '../../../components/customInput';
import { mainColor } from '../../../themes/constants';
import CustomDivider from '../../../components/customDivider';

function Register() {
  return (
    <div className="container login-container">
      {/* <img src={bgAuth} alt="Background" className="bg-image" /> */}
      <div className="overlay"></div>
      <div className="login-form flex flex-col h-full justify-center">
        <div className="flex flex-col items-center gap-2 mb-20">
          <img src={Logo} alt="VivaFlow" />
          <div className="text-xl font-bold text-white">Sign up to VivaFlow</div>
        </div>
        <form className="login-form flex flex-col gap-8">
          <div className='flex flex-col gap-4'>
            <CustomIonInput placeholder="Input your email" type="email" />
            <CustomIonInput placeholder="Input your user name" />
            <CustomIonInput placeholder="Input your password" type="password" />
            <CustomIonInput placeholder="Confirm your password" type="password" />
          </div>
          <IonButtons slot="start">
            <IonButton color={mainColor} className="w-full py-2 bg-[#892FE0] text-white rounded-xl" expand="block">Sign up</IonButton>
          </IonButtons>
          <CustomDivider />
          <IonButtons slot="start">
            <IonButton className="w-full py-2 bg-white text-[#892FE0] rounded-xl" expand="block">
              Sign in with Google
            </IonButton>
          </IonButtons>
          <div className="text-white">
            Already have an account? <a href="/register" className="text-[#892FE0]">Sign in</a>
          </div>
        </form>
      </div>  
    </div>
  );
}

export default Register;