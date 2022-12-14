import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
  IonInput,
} from "@ionic/react";

import "./Modal.css";
import {
  alertCircleOutline,
  paperPlane,
  paperPlaneOutline,
} from "ionicons/icons";
import { useForm } from "../hooks/useForm";
import { Route } from "workbox-routing";
export const  ModalView =()=> {
  const {user,password,onInputChange}= useForm({user:'',password:''});
  const [showModal, setShowModal] = useState(false);
  const [useExist, setUseExist] = useState(false);
  useExist ? window.location.reload() : console.log("HI");
  const setUserLocal = (e) => {
    e.preventDefault();
    localStorage.setItem("Gestor",JSON.stringify(user));
    setShowModal(false);
    setUseExist(true);
  };
  return (
    <IonPage id="ion-principal" fullscreen>
      <IonHeader >
      </IonHeader>
      <IonContent  className="ion-padding ion-text-center">
        <IonIcon icon={alertCircleOutline} id="alert" color="danger"></IonIcon>
        <IonHeader id="ion-padding">
          <IonText id="example-text">
            Para el uso de la aplicacion se debe crear un usuario unico Este
            usuario debe ser el del MBcase porque sera por el cual se filtre la informacion
            <p>Una vez creado el usuario no se podra cambiar</p>
          </IonText>
        </IonHeader>
        <IonButton id="ion-botones"  expand="block" onClick={()=>setShowModal(true)}>
          Registrar Usuario
          <IonIcon slot="end" icon={paperPlane} size="small"></IonIcon>
        </IonButton>
        <IonModal id="example-modal" isOpen={showModal}>
          <IonContent>
            <IonToolbar>
              <IonTitle>Registro Usuario</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => setShowModal(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <form onSubmit={setUserLocal}>
              <IonList id="formLogin">
                <IonItem>
                  <IonLabel position="floating">Usuario</IonLabel>
                  <IonInput name="user"  value={user} onIonChange={onInputChange} required placeholder="Usuario Unico"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Contrase??a</IonLabel>
                  <IonInput name="password" value={password} onIonChange={onInputChange} required type="password">
                  </IonInput>
                </IonItem>
              </IonList>
              <IonButton
                shape="round"
                color="tertiary"
                expand="full"
                type="submit"
              >
                Crear
                <IonIcon icon={paperPlaneOutline} size="small" />
              </IonButton>
            </form>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}