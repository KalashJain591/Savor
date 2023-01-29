import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Datauploader() {
    // const name = ["A2 Dry Milk Powder (100 gm)","A2 Dry Milk Powder (500 gm)","Aloevera Hair Shampoo (100 ml)","Aloevera Hair Shampoo (500 ml)","Aloevera Panchgavya Bath Soap (75 gm)","Aloevera Pure Juice (500 ml)","Angamardanam Tailem - Pain Relief Oil (50 ml)","Angarakshak Handmade Bath Soap","Ayur Ghee Plus -Nasal Drop (10 ml)","Brahmi Amla    (Hair Oil) (100 ML)","Carbon Panchgavya Bath Soap (75 gm)","Chandan Panchgavya Bath Soap (75 gm)","Cow Colostrums - Protein Supplement (60 Caps)","Cow Dung Cake (20 PCS)","Dantmanjana  (Tooth Powder) (50 GM)","Dish Wash Gel (250 ml)","Dish Wash Gel (500 ml)","Face Wash (50 gm)","Floor cleaner (500ml)","Gau Amrit Milk Kesar Bath Soap (75 GM)","Gau Chandan Agarbatti (70 gm)","Gau Gugal Agarbatti (70 gm)","Gau Suvas Agarbatti (70 gm)","Ghanvati - Cow Urine Vati (120 pills)","Go Real Neem & Cow Urine Bath Soap (65 GM)","GOMUTRA  (200 ML)","Gomutra Ark  (Distilled Cow Urine) (1 LTR)","Gomutra Ark  (Distilled Cow Urine) (200 ML)","Gomutra Ark  (Distilled Cow Urine) (500 ML)","Gopika Hair cleanser - Hair Shampoo (100 ml)","Gopika Hair cleanser - Hair Shampoo (500 ml)","Gopika Panchgavya Bath Soap (75 gm)","Hand Wash Liquid (250 ml)","Havan Samgari - Pooja Samagri (200 gm)","Jasmine Panchgavya Bath Soap (75 gm)","Madhuveri Diabetes Churn (100 gm)","Marham - Ayurvedic Skin Ointment (10 gm)","Pachanamrit - Digestive Powder (60 gm)","Panchgavya Ghrit (250 ml)","Panchgavya Moisturizing Body Lotion (100 ml)","REAL COW GHEE (250 ML)","REAL COW GHEE (500 ML)","Satvik Dhoop - Pooja Samagri (12 sticks)","Gugal Dhoop - Pooja Samagri (20 sticks)","Chandan Dhoop - Pooja Samagri (20 sticks)","Kapur Dhoop - Pooja Samagri (20 sticks)","Toilet Cleaner (500 ML)","Ubtan - Ayurvedic Bath Powder (100 gm)","Tulsi Honey - 400gm.","Rooswood Honey - 400gm.","Wild Forest - 400gm.","Jamun Honey 400gm.","Litchi Honey - 400gm","Sider Honey - 400gm","Kamdhenu Cow Bank"];
    // const quantity=[100,500,100,500,75,500, 50,0, 10,100, 75, 75,60,20,50,250,500, 50,500,75,70,70,70,0,65,200,1,200,500,100,500,75,250,200,75,100,10,60 ,250,100,250,500,0,0,0,0,500 ,100 ,400.,400.,400.,400.,400,400,0 ];
    // const unit=["gm","gm","ml","ml","gm","ml","ml","","ml","ML","gm","gm","Caps","PCS","GM","ml","ml","gm","ml","GM","gm","gm","gm","ls","GM","ML","TR","ML","ML","ml","ml","gm","ml","gm","gm","gm","gm","gm","ml","ml","ML","ML","ks","ks","ks","ks","ML","gm","gm","gm","gm","gm","gm","gm","0"
    // ]
    // const price = [ 80.00,399.00,85.00,340.00,60.00,110.00,85.00,40.00,100.00,100.00,45.00,55.00,840.00,50.00,55.00,85.00,160.00,70.00,40.00,70.00,55.00,55.00,55.00,145.00,30.00,30.00,180.00,50.00,100.00,85.00,340.00,55.00,105.00,50.00,45.00,110.00,40.00,85.00,960.00,75.00,549.00,1099.00,50.00,40.00,40.00,55.00,85.00,50.00,280.00,255.00,250.00,360.00,280.00,280.00,100.00];
    // var i=0;
    // const callapi=async ()=>{
    //     await axios.post("/admin/addproduct",{images:[{imgUrl:"https://en.pimg.jp/050/296/256/1/50296256.jpg"},{imgUrl:"https://en.pimg.jp/050/296/256/1/50296256.jpg"},{imgUrl:"https://en.pimg.jp/050/296/256/1/50296256.jpg"},{imgUrl:"https://en.pimg.jp/050/296/256/1/50296256.jpg"}],name:name[i],  description:"", price:price[i], stock:20,  category:"Goseva", feature:false,rating:0,reviews:0, quantity:quantity[i],unit:unit[i]})
    //     .then((res) => {
    //         i++;
    //         console.log(i);
    //         if(i<55){
    //             callapi();
    //         }
    //     //  alert("Products has been added")
    //     })
    // }
    // useEffect(() => {
    //   callapi();
    // }, [])
    
  return (
    <div>Data Was uploaded</div>
  )
}
