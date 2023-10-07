import {addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc} from "firebase/firestore";
import {db} from "../../firebaseConfig";

export const getCategoryFromFirebase = async () => {
    let ref = collection(db, "categories")
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

export const addCategoryToFireBase = async (data) => {
    try {
        let ref = collection(db, "categories");
        const docRef = await addDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}

export const deleteCategoryFromFireBase = async (data) => {
    try {
        let ref = doc(db, "categories", data.id)
        await deleteDoc(ref);
        return true;
    } catch (e) {
        return e.message
    }
}


export const updateCategoryFromFireBase = async (id,data) => {
    try {
        let ref = doc(db, "categories", id)
        await updateDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}
