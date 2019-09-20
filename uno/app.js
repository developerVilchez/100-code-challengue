
  /* Referencias
     la referencia es una api de la forma https://<DATABASE_NAME>.firebaseio.com/users/ada.
     // The key of a root reference is null
        var rootRef = firebase.database().ref();
      var key = rootRef.key;  // key === null
  */
 //console.log(firebase.database()); 
 // funciona
 /*Creo la referencia libro 
 // la data se va ir guardando como referencia.
 // The key of any non-root reference is the last token in the path
 var adaRef = firebase.database().ref("users/ada");
 var key = adaRef.key;  // key === "ada"
 key = adaRef.child("name/last").key;  // key === "last" 
 */
 
 /* const refBooks = firebase.database().ref('book');
 console.log(refBooks.key);
 console.log(refBooks.child('book/users').key);
 console.log(refBooks.child('book/users').parent.key)
 console.log(refBooks.parent.key)
 refBooks.push().set({
   titulo : 'Contarlo todo',
   autor : 'Jeremias Gamboa'
 })
  */
