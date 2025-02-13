import { db } from "../db.js"

export const getMovie = async  (req, res) => {

    const sql = 'select * from movie'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postMovie = async (req, res) => {

    const tmp = req.body

    if (!tmp.title){
        res.status(300).json({message: "Field title is empty"})
        return 
    }

    if (!tmp.release_year){
        res.status(300).json({message: "Field release_year is empty"})
        return
    }

    if (!tmp.genre){
        res.status(300).json({message: "Field genre is empty"})
        return
    }

    if (!tmp.duration){
        res.status(300).json({message: "Field duration is empty"})
        return
    }

    try{
        const str = 'insert into movie (title, release_year, genre, duration) values ($1, $2, $3, $4)'
        const arr = [tmp.title, tmp.release_year, tmp.genre, tmp.duration]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Movie Created" })
        return 
    }catch(err){
        res.status(500).json({message: err})
        return
    }
    

}

export const putMovie = async (req,res)=>{

    const movie_id= req.params.id
    const tmp= req.body

    if (!tmp.title){
        res.status(300).json({message: "Field title is empty"})
        return 
    }

    if (!tmp.release_year){
        res.status(300).json({message: "Field release_year is empty"})
        return
    }

    if (!tmp.genre){
        res.status(300).json({message: "Field genre is empty"})
        return
    }

    if (!tmp.duration){
        res.status(300).json({message: "Field duration is empty"})
        return
    }

    try{
    const arr= [tmp.title, tmp.release_year, tmp.genre, tmp.duration, movie_id]
    const sql= `update movie
                set title= $1,
                release_year= $2,
                genre= $3,
                duration= $4
                where movie_id = $5`

    const result= db.query(sql,arr)
    res.json({message: "Movie Updated"})
    }catch(err){
        res.status(500).json({message: err})
    }

}

export const deleteMovie = async (req,res)=>{

    const movie_id= req.params.id
    const sql= `delete from movie where movie_id= $1`
    const arr= [movie_id]
    const result = await db.query(sql, arr)

    res.json({message: "Movie Deleted"})
}