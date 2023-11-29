import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonButton, IonLabel, IonInput } from '@ionic/react';
import './LoginPage.css';

const LoginPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle class="ion-text-center">PC Planet</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <div id="logo" className="ion-text-center">
          <IonImg src="C:\Pemrograman Web\pc-planets\public\Unhas-logo.png" alt="PC-PLANET" style={{ width: '100%' }} />
        </div>

      <div id="welcome" className="ion-text-center ion-padding">
        <IonText>
          <h1>Temukan PC Impianmu di sini</h1>
          <p>Rasakan sensasi masuk ke dunia PC</p>
        </IonText>
      </div>

      <div id="daftar" className="ion-padding">
        <IonText>
          <h2>Daftar Sekarang</h2>
        </IonText>
        {/* Tambahkan form pendaftaran di sini */}
        <IonLabel position="floating">Username</IonLabel>
        <IonInput></IonInput>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password"></IonInput>
        <IonButton expand="full" routerLink="#">
          Daftar
        </IonButton>
      </div>

      <div id="masuk" className="ion-padding">
        <IonText>
          <h2>Sudah punya akun? Masuk</h2>
        </IonText>
        {/* Tambahkan form masuk di sini */}
        <IonLabel position="floating">Username</IonLabel>
        <IonInput></IonInput>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password"></IonInput>
        <IonButton expand="full" routerLink="#">
          Masuk
        </IonButton>
      </div>
      <IonText>
          <p>
            Daftar Dengan mendaftar, saya menyetujui{' '}
            <a href="#">Syarat dan Ketentuan</a> serta{' '}
            <a href="#">Kebijakan Privasi</a>
          </p>
        </IonText>
    </IonContent>
  </IonPage>
);

export default LoginPage;
