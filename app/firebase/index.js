import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyCmYUtVNoyrqMHIuUZckEi-1zegbMiS-zg",
      authDomain: "todo-app-7c13a.firebaseapp.com",
      databaseURL: "https://todo-app-7c13a.firebaseio.com",
      storageBucket: "todo-app-7c13a.appspot.com",
      messagingSenderId: "345623967024"
    };

  firebase.initializeApp(config);
} catch(e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
