import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCmYUtVNoyrqMHIuUZckEi-1zegbMiS-zg",
    authDomain: "todo-app-7c13a.firebaseapp.com",
    databaseURL: "https://todo-app-7c13a.firebaseio.com",
    storageBucket: "todo-app-7c13a.appspot.com",
    messagingSenderId: "345623967024"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Ye',
    age: 26
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Wash the car'});
todosRef.push({text: 'Feed the dog'});
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Notes id', newNoteRef.key);

// firebaseRef.update({
//   'app/version': '1.0.2',
//   'user/name': 'Chao'
// });

// firebaseRef.child('app').update({
//   version: '1.0.2'
// });
//
// firebaseRef.child('user').update({
//   name: 'Chao'
// });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({
//   isRunning: false
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Chao'
// });
//
// firebaseRef.child('app').update({
//   version: '3.0.1'
// });
