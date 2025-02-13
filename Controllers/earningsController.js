import { db } from "../db.js"

export const getEarnings = async  (req, res) => {

    const sql = 'select * from earnings'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postEarnings = async (req, res) => {

    const tmp = req.body

    if (!tmp.movie_id){
        res.status(300).json({message: "Field movie_id is empty"})
        return 
    }

    if (!tmp.revenue){
        res.status(300).json({message: "Field revenue is empty"})
        return
    }

    if (!tmp.country){
        res.status(300).json({message: "Field country is empty"})
        return
    }

    try{
        const str = `insert into earnings (movie_id, country, revenue) values ($1, $2, $3)`
        const arr = [tmp.movie_id, tmp.country, tmp.revenue ]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Earnings Added" })
        return 
    }catch(err){
        res.status(500).json({message: err})
        return
    }
    
}

export const putEarnings  = async (req, res) => {
    const earnings_ID = req.params.id
    const tmp = req.body

    if (!tmp.movie_id){
        res.status(300).json({message: "Field movie_id is empty"})
        return 
    }

    if (!tmp.revenue){
        res.status(300).json({message: "Field revenue is empty"})
        return
    }

    if (!tmp.country){
        res.status(300).json({message: "Field country is empty"})
        return
    }


    try{
        const arr = [tmp.movie_id, tmp.country, tmp.revenue, earnings_ID ]

        const sql = ` update earnings
                     set movie_id = $1, 
                        country = $2,
                        revenue= $3
                        where earnings_ID= $4`
    
        const result = db.query(sql, arr)
    
        res.json({ message: "Earnings Updated" })

    }catch(err){
        res.status(500).json({message: err})
    }
}

export const deleteEarnings = async (req, res) => {

    const earnings_ID = req.params.id
    const sql = `delete from earnings where earnings_ID = $1`
    const arr = [earnings_ID]

    const result = await db.query(sql, arr)

    res.json({ message: "Earnings Deleted" })

}