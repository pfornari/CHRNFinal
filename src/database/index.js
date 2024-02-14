import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('session.db')

export const init = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',
            [],
            ()=>resolve(),
            (_,err)=>(reject(err)))
            
        })
    })
    return promise
}

export const insertSession = ({email, idToken, localId}) => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
            'INSERT INTO sessionUser (email,idToken,localId) VALUES (?,?,?);', 
            [email, idToken, localId],
            (_,result)=>resolve(result),
            (_,err)=>(reject(err)))
            
        })
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
            'SELECT * FROM sessionUser', 
            [],
            (_,result)=>resolve(result),
            (_,err)=>(reject(err)))
            
        })
    })
    return promise
}


export const deleteAllSession = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
            'DELETE FROM sessionUser', 
            [],
            (_,result)=>resolve(result),
            (_,err)=>(reject(err)))
            
        })
    })
    return promise
}