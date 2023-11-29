import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonButton,
} from '@ionic/react';
import './Profile.css'; // Pastikan file CSS ini sudah ada

const Profile: React.FC = () => {
  const [userData, setUserData] = useState({
    nama: '',
    jenis_kelamin: '',
    tanggal_lahir: '',
    no_handphone: '',
    email: '',
  });

  useEffect(() => {
    // Lakukan panggilan API atau pengambilan data sesuai kebutuhan
    // Contoh: fetch data dari server
    const fetchData = async () => {
      const response = await fetch('api/user/profile');
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []); // useEffect hanya dijalankan sekali setelah render pertama

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logika untuk mengirim data update ke server
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PC Planet</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
      <div className="container">
          <h1>PC Planet</h1>
          <h2>Profil</h2>
        </div>
        <form onSubmit={handleUpdate}>
          <IonLabel position="floating">Nama:</IonLabel>
          <IonInput type="text" name="nama" value={userData.nama} />

          <IonLabel position="floating">Jenis Kelamin:</IonLabel>
          <IonSelect name="jenis_kelamin" value={userData.jenis_kelamin}>
            <IonSelectOption value="Laki-laki">Laki-laki</IonSelectOption>
            <IonSelectOption value="Perempuan">Perempuan</IonSelectOption>
          </IonSelect>

          <IonLabel position="floating">Tanggal Lahir:</IonLabel>
          <IonDatetime name="tanggal_lahir" display-Format="DD/MM/YYYY" value={userData.tanggal_lahir} />

          <IonLabel position="floating">No. Handphone:</IonLabel>
          <IonInput type="text" name="no_handphone" value={userData.no_handphone} />

          <IonLabel position="floating">Email:</IonLabel>
          <IonInput type="email" name="email" value={userData.email} />

          <IonButton expand="full" type="submit">
            Update
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
