import firebase from './firebase'

interface messageProps {
    authorId: string
    author: string
    created_at: string

}


const firestore = firebase.firestore();

export function createUser(uid: string, data: object) {
    return firestore.collection('users').doc(uid).set({ uid, ...data }, { merge: true })

}

export function createMessage(data: messageProps) {

    try {
        // continue here.
        var test = firestore.collection('messages').where('authorId', '==', data.authorId);
        test.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, ' => ', doc.data());
            });
        });


        // return firestore.collection('messages').add(data)
    } catch (err) {
        console.log('Something went wrong ', err)
    }

}