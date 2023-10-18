import express from 'express'
import cors from 'cors'
import{getAllPlants, addPlant} from './src/plants.js'   // 


const PORT =3005 // Hangi portta calistiracagimizi belirliyoruz

const app = express() // express app olusturur
app.use(express.json())  // hey app Json formati kullan

app.use(cors())     // cors app olusturur.
                    // Cross-Origin Source Sharing

 app.get("/plants",getAllPlants)   
 app.post("/plants",addPlant)
//  app.delete("/plants/:plantId",deletePlant)               

 app.listen(PORT,() =>{
    console.log(`Listening on http://localhost:${PORT}...`) // DOLLAR ISARETINDEN SONRA SUSLU PARANTEZ ACIP 
                                                            //ICINE BELIRLENMIS VARIABLE EKLIYORUZ
   // console.log("Listening on http://localhost:"+ PORT + "...")  // YUKARDAKININ AYNI YAZILISI


 })      


//  mavi olanlar function
