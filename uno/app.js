
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

 <script>
 /* Once está promisificado
  firebase.database().ref('books').once("value")
   .then(function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
       // key will be "ada" the first time and "alan" the second time
       var key = childSnapshot.key;
       // childData will be the actual contents of the child
       var childData = childSnapshot.val();
   });
 });
 */
 </script>
 <script>
 // Como callbacks está el on
 
 /* refBooks.on('value', function(snapshot) {
   console.log('ocho');
   console.log(snapshot.val());
   console.log(snapshot.numChildren());
   snapshot.forEach((ele)=>{
     console.log(ele.val().id);
     console.log(ele.key);
   })
 }); */
 console.log('fin')
 </script>
 <script>
 /* refBooks.on("value")
   .then(function(snapshot) {
     var a = snapshot.hasChildren(); // true
     var b = snapshot.child("name").hasChildren(); // true
     var c = snapshot.child("name/first").hasChildren(); // false
   }); */
 </script>