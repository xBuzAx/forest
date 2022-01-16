const navMobile = document.querySelector('.nav__mobile')
const navDesktop = document.querySelectorAll('.nav__desktop-link')
const scrollSpySections = document.querySelectorAll('section')
const allNavItems = document.querySelectorAll('.nav__mobile-link')
const burger = document.querySelector('.nav__burger')
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
   navMobile.classList.toggle('nav__mobile--active')
   
   allNavItems.forEach((item) => {
      item.addEventListener('click', () => {
         navMobile.classList.remove('nav__mobile--active')
      })
   })
}

const handleScrollSpy = () => {
   if(document.body.classList.contains('forest-page')) {
      const sections = []
      scrollSpySections.forEach(section => {
         if(window.scrollY <= section.offsetTop + section.offsetHeight - 110) {
            sections.push(section)        
            const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
            navDesktop.forEach(item => item.classList.remove('active'))
            activeSection.classList.add('active')
         }
      })
   }
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear()
burger.addEventListener('click', handleNav)
window.addEventListener('scroll', handleScrollSpy)