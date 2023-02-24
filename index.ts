import fs from 'fs'
import sharp from 'sharp'

const buffer = fs.readFileSync('./src/input/img.jpeg')

const edit = async()=>{
  const img = await sharp(buffer).rotate(90).toBuffer();

  await fs.writeFile('./src/output/img.jpg',img,(err)=>{
    if(err)return console.log(err)
    console.log('!!!');
  })

  return img
}

edit();

