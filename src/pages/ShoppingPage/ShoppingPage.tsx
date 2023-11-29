import React from 'react';
import {
  IonApp,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,

} from '@ionic/react';
import './ShoppingPage.css';
import Card from '../../components/card/Card';

const ShoppingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Card></Card>
      </IonContent>
    </IonPage>
  );
};

export default ShoppingPage;
