<script>
  // Your web app's Firebase configuration
  console.log('inicio de config firebase');
  const firebaseConfig = {
    apiKey: "AIzaSyC9nf5lTAkqqcHYhtq2mAzAsRdn7Rw4ySU",
    authDomain: "my-not-so-awesome-proyect.firebaseapp.com",
    databaseURL: "https://my-not-so-awesome-proyect.firebaseio.com",
    projectId: "my-not-so-awesome-proyect",
    storageBucket: "",
    messagingSenderId: "674941339443",
    appId: "1:674941339443:web:a8ff7b0200887b07e8e046"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('dos fin de config');
</script>
<script>
  console.log('tres declaración de variables');
  const refBooks = firebase.database().ref('books');
  const buttonAddBook = document.getElementById('add-book');  
  const inputTitulo = document.getElementById('titulo');
  const inputAutor = document.getElementById('autor');

  console.log('cuatro declaración de la función addReference');
  const addReference = (rootReef, obj) => {
    const newRef = rootReef.push();
    obj.id = newRef.key.toString();
    newRef.set(obj)
  }


  console.log('cinco declaracion de funcion getdata');
 const getData = (ref, cb) => {
   ref.on('value', (data) => {
    const arr = [];
    data.forEach((ele)=>{
      arr.push(ele.val());
    })
     cb(arr);
  })
  
}

console.log('seis asociar el evento al boton');

  buttonAddBook.addEventListener('click', () => {

    console.log('siete invoca funcion addReference')
    addReference(refBooks, {
      titulo: inputTitulo.value,
      autor : inputAutor.value
    })

    inputTitulo.value = '';
    inputAutor.value = '';
    console.log('ocho limpie inputs');
   //  console.log(getData(refBooks)); 

   console.log('fin del scope del evento click');
  })

  console.log('nueve invoca getData')
   //console.log(getData(refBooks)) // linea 39
   getData(refBooks, (data) => {
    console.log(data);
   })

</script>