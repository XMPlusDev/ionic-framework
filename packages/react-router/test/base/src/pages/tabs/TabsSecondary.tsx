import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from '@ionic/react';
import { Route, Navigate } from 'react-router';
import { triangle, square } from 'ionicons/icons';

interface TabsSecondaryProps {}

const TabsSecondary: React.FC<TabsSecondaryProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="tabs-secondary">
        <Route path="/tabs-secondary/tab1" element={<Tab1 />} exact />
        <Route path="/tabs-secondary/tab2" element={<Tab2 />} exact />
        <Navigate from="/tabs-secondary" to="/tabs-secondary/tab1" exact replace />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1-secondary" href="/tabs-secondary/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2-secondary" href="/tabs-secondary/tab2">
          <IonIcon icon={square} />
          <IonLabel>Tab2</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const Tab1 = () => {
  return (
    <IonPage data-pageid="tab1-secondary">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab1</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Tab 1
      </IonContent>
    </IonPage>
  );
};

const Tab2 = () => {
  return (
    <IonPage data-pageid="tab2-secondary">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Tab 2
      </IonContent>
    </IonPage>
  );
};

export default TabsSecondary;
