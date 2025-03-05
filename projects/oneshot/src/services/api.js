import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./firebase";

const collectionName = 'oneshot';

export const getMessageByUserId = async (userId) => {
    const colRef = collection(db, collectionName, userId, 'messages');
    const result = await getDocs(colRef);
    return getArrayFromCollection(result);
}

// CREATE
export const createMessage = async(obj, idUser) => {
    // const colRef = collection(db, collectionName);
    const colRef = collection(db, collectionName, idUser, 'messages');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, taskId, obj) => {
    // const docRef = doc(db, collectionName, id);
    const docRef = doc(db, collectionName, id, "tasks", taskId);
    await updateDoc(docRef, obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('username', '!=', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deleteMessage = async (userId, taskId) => {
    // const docRef = doc(db, "tasks", id);
    const docRef = doc(db, collectionName, userId, "messages", taskId);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const signUp = async ({username,email, password}) => {
    try {
        console.log(1111111111111, email, password)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('222222222222222')
        // sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        const docRef = doc(db, collectionName, user.uid);
        await setDoc(docRef, {username: username});
        return user.uid;
    } catch (err) {
        return err.message;
    }
}

export const signIn = async ({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user.uid;
    } catch (err) {
        return err.message;
    }
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(result => {
        const docRef = doc(db, collectionName ,result.user.uid);
        setDoc(docRef, {username: result.user.uid});
        return result.user;
    });
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);