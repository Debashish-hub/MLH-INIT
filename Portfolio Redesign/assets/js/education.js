AOS.init();
// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "AI assistant with Python",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-5cdb84e9-5087-4a5f-bbf3-71f361ada2e7/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-3a5930f9-a7e0-4ee3-98b0-8f4523906a20/",
  },
    {
    title: "Facial Expression Recognition with Keras",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://coursera.org/share/98d1d51e0b894d6dd1a7061cd0cfaf0d",
  },
  {
    title: "Machine Learning & Deep Learning",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-95f8d190-cd31-4ec1-b751-33570b1d1d17/",
  },
  {
    title: "Wordpress",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-a4c4e7af-d420-487d-b1eb-71311ddbeb9c/",
  },
   {
    title: "Data Science",
    cardImage: "assets/images/education-page/gatm.png",
    moocLink: "https://demo4.greyatom.com/certificates/GA-1HPHEJWWQ",
  },
  {
    title: "Introduction to Cloud Computing",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-ac9b6cc7-2ab3-4cc2-ba0b-17f7b8e00c46/",
  },
  {
    title: "Django",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-54ca1c69-a2ec-43fb-8628-8127fa5a0a82/",
  },
  {
    title: "Python",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-7d73c214-6c12-44f4-b42d-bd8b07d74217/",
  },
  {
    title: "Mern Stack",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-c014c145-7b5a-4f8a-8539-f3396ce30f1e/",
  },
  {
    title: "DevOps",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-85294781-2343-4170-bd46-036441ae3946/",
  },
  {
    title: "Artificial Neural Network",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-35bb27a2-50c3-477f-89f1-8cb1c411b3f1/",
  },
 
 
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 " data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body p-1">
                    <h6 class="mt-0 py-2 text-center font-weight-bold" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);