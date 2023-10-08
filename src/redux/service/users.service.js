import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const getUserFromFirebase = async () => {
    let ref = collection(db, "users")
    const q = query(ref);

    const querySnapshot = await getDocs(q);

    let data = [];

    querySnapshot.forEach((doc) => {

        let d = doc.data();
        d.id = doc.id;

        data.push(d);
    });

    return data;
}

export const addUserToFireBase = async (data) => {
    try {
        let ref = collection(db, "users");
        const docRef = await addDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}

export const deleteUserFromFireBase = async (data) => {
    try {
        let ref = doc(db, "users", data.id)
        await deleteDoc(ref);
        return true;
    } catch (e) {
        return e.message
    }
}


export const updateUserFromFireBase = async (id, data) => {
    try {
        let ref = doc(db, "users", id)
        await updateDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}
