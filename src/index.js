import './style.css';
import './buttons';

import img0 from "./Images/unnamed.jpg";
import img1 from "./Images/0b9d33f494ea1f6a7a8c3e6f6c8a3e09.jpg";
import img2 from "./Images/1a078f605f53c52288f702b211b4df13.jpg";
import img3 from "./Images/1ce6a77519ce12b3adf1267b71f933e0.jpg";
import img4 from "./Images/1dcd92e4fb1ecd0877c0a81ed2d0e5f0.jpg";
import img5 from "./Images/8ab6255ec27a004b54e177051a2cdf1a.jpg";
import img6 from "./Images/93e59c1c88cd6ac03d99a8497a4ba65a.jpg";
import img7 from "./Images/198a37f856d2179a9413170f0c27cb09.jpg";
import img8 from "./Images/507ef7ad419cd6e5fd1f513766e8cf9d.jpg";
import img9 from "./Images/690a2dbd23af699e86d28b79a9d7961c.jpg";
import img10 from "./Images/7671d453be769ca2c8687a10ee3e361c.jpg";
import img11 from "./Images/261435dace81021d4710e2de1fafa5a2.jpg";
import img12 from "./Images/7124834f6ef7aa0e26584d274a1c8cb8.jpg";
import img13 from "./Images/a5a1efd66f1d9c20326e4388f5c49c08.jpg";
import img14 from "./Images/bfd7fd1883b627c7a6093579ab3f94e5.jpg";
import img15 from "./Images/c507256ac48644165475102354df3e63.jpg";
import img16 from "./Images/d1ab8999359cc8c7da2e2bb83730ac4f.jpg";
import img17 from "./Images/d575a36119101eddc8f7cdbff33aadc2.jpg";

const imageArr = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17];

for(let i=0; i<18; i+=1){
    const imageTag  = document.querySelector(`.navigation#i${i}`);
    const navImageTag = document.querySelector(`.slide#i${i}`);
    imageTag.setAttribute("src", imageArr[i]);
    navImageTag.setAttribute("src", imageArr[i]);
}