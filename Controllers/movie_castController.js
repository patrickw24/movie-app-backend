import { db } from "../db.js"

export const getCast = async  (req, res) => {

    const sql = 'select * from movie_cast'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postCast = async (req, res) => {

    const tmp = req.body

    if (!tmp.movie_id){
        res.status(300).json({message: "Field movie_id is empty"})
        return 
    }

    if (!tmp.actor_id){
        res.status(300).json({message: "Field actor_id is empty"})
        return
    }

    if (!tmp.role){
        res.status(300).json({message: "Field role is empty"})
        return
    }

    try{
        const str = 'insert into movie_cast (movie_id, actor_id, role) values ($1, $2, $3)'
        const arr = [tmp.movie_id, tmp.actor_id, tmp.role]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Cast Created" })
        return 
    }catch(err){
        res.status(500).json({message: err})
        return
    }
    

}

export const putCast = async (req, res) => {
    const movie_cast_id = req.params.id
    const tmp = req.body

    if (!tmp.movie_id){
        res.status(300).json({message: "Field movie_id is empty"})
        return 
    }

    if (!tmp.actor_id){
        res.status(300).json({message: "Field actor_id is empty"})
        return
    }

    if (!tmp.role){
        res.status(300).json({message: "Field role is empty"})
        return
    }


    try{
        const arr = [tmp.movie_id, tmp.actor_id, tmp.role, movie_cast_id]

        const sql = ` update movie_cast
                     set movie_id = $1, 
                        actor_id = $2,
                        role= $3
                        where movie_cast_id= $4`
    
        const result = db.query(sql, arr)
    
        res.json({ message: "Cast Updated" })
    }catch(err){
        res.status(500).json({message: err})
    }

}

export const deleteCast = async (req, res) => {

    const movie_cast_id = req.params.id
    const sql = `delete from movie_cast where movie_cast_id = $1`
    const arr = [movie_cast_id]

    const result = await db.query(sql, arr)

    res.json({ message: "Cast Deleted" })

}