import * as ulidx from 'ulidx';

let request = window.indexedDB.open("MyTestDatabase", 3);

let dbPromise = new Promise((resolve, reject) => {
    request.onerror = (event) => {
        debugger;
    };
    request.onsuccess = (event) => {
        resolve(event.target.result);
    };
    request.onupgradeneeded = (event) => {
        let db = event.target.result;
        let bugsStore = db.createObjectStore("draft_bugs", { keyPath: "localID" });
        bugsStore.transaction.oncomplete = (event) => {
            resolve(db);
        };
    };
});

export async function addDraftBug(bug) {
    let bugsStoreTransaction = (await dbPromise)
        .transaction("draft_bugs", "readwrite")
        .objectStore("draft_bugs");
    bugsStoreTransaction.add(bug);
}

export async function getBugDetailsByIDAsync(id) {
    console.log('getting', id);
    let db = await dbPromise;
    return await new Promise((resolve, reject) => {
        let bugsStoreTransaction = db
            .transaction("draft_bugs", "readonly")
            .objectStore("draft_bugs");
        let request = bugsStoreTransaction.get(id);
        bugsStoreTransaction.onerror = (event) => {
            debugger;
        };
        bugsStoreTransaction.oncomplete = (event) => {
            debugger;
        };
        request.onerror = (event) => {
            debugger;
        };
        request.onsuccess = (event) => {
            console.log('got', request.result);
            resolve(request.result);
        };
    });
}

export async function getAllBugsInfoAsync(id) {
    console.log('getting', id);
    let db = await dbPromise;
    return await new Promise((resolve, reject) => {
        let bugsStoreTransaction = db
            .transaction("draft_bugs", "readonly")
            .objectStore("draft_bugs");
        let request = bugsStoreTransaction.getAll();
        bugsStoreTransaction.onerror = (event) => {
            debugger;
        };
        bugsStoreTransaction.oncomplete = (event) => {
            debugger;
        };
        request.onerror = (event) => {
            debugger;
        };
        request.onsuccess = (event) => {
            console.log('got', request.result);
            resolve(request.result.map((bug) => ({id: bug.localID, title: bug.title})));
        };
    });
}
