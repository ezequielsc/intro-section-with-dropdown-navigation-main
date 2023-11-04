//----------------------------Menu Descktop 

//Desktop Features 
const menuFeatures = document.querySelector('.features');
const menu = document.querySelector('.sub-features');


menuFeatures.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o evento de clique se propague para o elemento pai (deskMob)
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});


//Desktop Company 
const menuCompany = document.querySelector('.company');
const subCompany = document.querySelector('.sub-company');

menuCompany.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o evento de clique se propague para o elemento pai (deskMob)
  if (subCompany.style.display === 'none' || subCompany.style.display === '') {
    subCompany.style.display = 'block';
  } else {
    subCompany.style.display = 'none';
  }
});




//----------------------------Menu Mobile


// Menu 
const deskMob = document.querySelector('.desktopmob'); 
const menuMob = document.querySelector('.menumob'); 


deskMob.addEventListener('click', () => {
  if (menuMob.style.display === 'none' || menuMob.style.display === '') {
    menuMob.style.display = 'block';
  } else {
    menuMob.style.display = 'none';
  }
});

// Features
const featuresMob = document.querySelector('.features-mob'); 
const subFeaturesMob = document.querySelector('.sub-features-mob'); 

featuresMob.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o evento de clique se propague para o elemento pai (deskMob)
  
  if(subFeaturesMob.style.display === 'none' || subFeaturesMob.style.display === '') {
    subFeaturesMob.style.display = 'block';
  } else {
    subFeaturesMob.style.display = 'none';
  }
});

// Company
const companyMob = document.querySelector('.company-mob'); 
const subCompanyMob = document.querySelector('.sub-company-mob'); 

companyMob.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o evento de clique se propague para o elemento pai (deskMob)
  
  if(subCompanyMob.style.display === 'none' || subCompanyMob.style.display === '') {
    subCompanyMob.style.display = 'block';
  } else {
    subCompanyMob.style.display = 'none';
  }
});



