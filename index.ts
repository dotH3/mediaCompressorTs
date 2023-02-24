import fs from 'fs'
import sharp from 'sharp'


const edit = async()=>{
  const buffer = fs.readFileSync('./src/input/img.jpeg')
  console.log((Buffer.byteLength(buffer) / (1024 * 1024)).toFixed(2)+' MB');
  
  const img = await sharp(buffer).resize({width:800,height:600,fit:'contain'}).toBuffer();
  console.log((Buffer.byteLength(img) / (1024 * 1024)).toFixed(2)+' MB');

  await fs.writeFile('./src/output/img.jpg',img,(err)=>{
    if(err)return console.log(err)
  })

  return console.log('Done!');
  
}

edit();

