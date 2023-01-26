import type {Firestore} from "firebase-admin/lib/firestore";
import type {Storage} from "firebase-admin/lib/storage";

export interface FirebaseOptions {
    firestore: Firestore,
    storage: Storage,
}

export interface BuildSitemapOptions {

}