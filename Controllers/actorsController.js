import { db } from "../db.js"

export const getActors = async  (req, res) => {

    const sql = 'select * from actor'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postActors = async (req, res) => {

    const tmp = req.body

    if (!tmp.name){
        res.status(300).json({message: "Field name is empty"})
        return 
    }

    if (!tmp.date_of_birth){
        res.status(300).json({message: "Field date_of_birth is empty"})
        return
    }

    if (!tmp.nationality){
        res.status(300).json({message: "Field nationality is empty"})
        return
    }

    try{
        const str = 'insert into actors (name, date_of_birth, nationality) values ($1, $2, $3)'
        const arr = [tmp.name, tmp.date_of_birth, tmp.nationality]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Actor Created" })
        return 
    }catch(err){
        res.status(500).json({message: err})
        return
    }
    

}

export const putActor = async (req, res) => {
    const actor_id = req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.date_of_birth, tmp.nationality, actor_id]

    const sql = ` update actor
                 set name = $1, 
                    date_of_birth = $2,
                     nationality= $3
                    where actor_id= $4`

    const resul = db.query(sql, arr)

    res.json({ message: "Actor Updated" })

}


export const deleteActor = async (req, res) => {

    const actor_id = req.params.id
    const sql = `delete from actor where actor_id = $1`
    const arr = [actor_id]

    const result = await db.query(sql, arr)

    res.json({ message: "Actor Deleted" })

}