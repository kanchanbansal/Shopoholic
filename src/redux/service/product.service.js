import {addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc} from "firebase/firestore";
import {db} from "../../firebaseConfig";

export const getProductFromFirebase = async () => {
    let ref = collection(db, "products")
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

export const addProductToFireBase = async (data) => {
    try {
        let ref = collection(db, "products");
        const docRef = await addDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}

export const deleteProductFromFireBase = async (data) => {
    try {
        let ref = doc(db, "products", data.id)
        await deleteDoc(ref);
        return true;
    } catch (e) {
        return e.message
    }
}


export const updateProductFromFireBase = async (id,data) => {
    console.log("dfasfdsaf");
    try {
        let ref = doc(db, "products", id)
        await updateDoc(ref, data);
        return true;
    } catch (e) {
        return e.message
    }
}
