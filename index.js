import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const filename=fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)
const port=8070
const host='127.0.0.1'
const app=express()

/**
 * Middleware intégré à Express.
 * Permet d'extraire le corps d'une requête POST ou PUT, accessible par la suite dans 'req.body' sous la forme d'un objet.
 */
app.use(express.urlencoded({extended: true}))

/**
 * Middleware autorisant le 'Cross-Origin Resource Sharing'.
 * Tel que défini, ici on autorise la connexion à notre serveur depuis n'importe quelle origine.
 */
app.use(cors())

/**
 * Middleware indiquant les répertoires de fichiers statiques auxquels Express peut accéder.
 */
app.use(express.static(path.join(dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(dirname, 'public', 'images', 'favicon.png')))

/**
 * Définit la route '/' pour la méthode 'get'
 */
app.get('/',(req,res)=>{
  res.sendFile('index.html',{root: path.join(dirname)},err=>{
    if (err) throw new Error(err)
  })
})

/**
 * Définit la route '/comment' pour la méthode 'post'
 */
app.post('/comment',(req, res)=>{
  const comment = req.body.message
  res.send(comment)
})

/**
 * Démarre le serveur
 */
app.listen(port,host,() => {console.info(`Server started @ http://${host}:${port}.`)})