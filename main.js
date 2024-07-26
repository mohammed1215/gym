const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Swal.fire({
//   template: "#popup",
//   position: "center",
//   icon: "error",
//   iconColor: "red",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500,
// });

let form = document.forms[0];
let inputs = form.querySelectorAll("input");
form.onsubmit = (e) => {
  if (!inputs[0].value && !inputs[1].value) {
    Swal.fire({
      template: "#my-template",
      icon: "error",
      title: "there is an error Inputs",
    });
  } else {
    inputs.forEach((input, index) => {
      if (!input.value) {
        if (index === 0) {
          Swal.fire({
            template: "#my-template",
            icon: "error",
            title: "there is an error in the name",
          });
        } else if (index === 1) {
          Swal.fire({
            template: "#my-template",
            icon: "error",
            title: "there is an error in the phone number",
          });
        }
      }
    });
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    Swal.fire({
      template: "#my-template",
      icon: "success",
      iconColor: "green",
      title: "there is an error in the name",
    });
  }
  e.preventDefault();
};

let address = document.querySelector("address");
address.innerHTML = ` <h2>Contact</h2>
         <p> Lakeside 15th street</p>
          <p>Pokhara, Nepal</p>
         <p> +977-[0]61-467701</p>`;

let map = document.querySelector(".map img");
let zoomIndex = 1;
function zoom(mood) {
  if (mood === "In") {
    zoomIndex += 0.5;
  } else {
    zoomIndex -= 0.5;
  }

  if (zoomIndex <= 0) {
    zoomIndex = 0.5;
  }
  if (zoomIndex > 15) {
    zoomIndex = 3;
  }
  map.style.transform = `scale(${zoomIndex})`;
}
let imgs = [
  `https://static.vecteezy.com/system/resources/previews/046/836/977/non_2x/african-male-fitness-trainer-in-gym-fitness-and-wellness-african-american-coach-healthy-lifestyle-photo.jpg`,
  `https://static.vecteezy.com/system/resources/thumbnails/046/837/108/small/middle-aged-male-fitness-trainer-in-gym-promoting-health-and-wellness-perfect-for-fitness-advertisements-gym-promotions-photo.jpg`,
  `https://static.vecteezy.com/system/resources/thumbnails/046/837/594/small/confident-middle-aged-fitness-trainer-standing-in-modern-gym-with-folded-arms-showcasing-strength-and-well-being-photo.jpg`,
  `https://t4.ftcdn.net/jpg/07/30/52/51/360_F_730525107_qgcrMvmV6s53wf83sIA21tfYhIC5BLkf.webp`,
];
function adding() {
  let add = document.querySelector("section.trainers .container");
  imgs.forEach((img) => {
    add.innerHTML += `<div class="trainer">
    <div class="img-holder-trainer">
      <img src="${img}" alt="" />
    </div>
    <p class="trainers-text">Rina Pun</p>
  </div>
</div>`;
  });
}
