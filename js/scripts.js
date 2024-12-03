// get me a list of all the items to watch
const myListOfItems = document.querySelectorAll('section');

// a comma deliniated list of name/value pairs controlling how the observer works
let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px -40% 0px',
    //0 is barely showing, 1 is fully showing
    threshold: 0.25
};

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting) {
            hiliteNav(singleItem.target); // Call hiliteNav when a section is in view
        }
    });
}, observerOptions);

// function to hilight the current navigation items
function hiliteNav(x) {
    const currentActive = document.querySelector('.active');
    if (currentActive) {
        currentActive.classList.remove('active'); 
    }

    let theid = x.getAttribute('id');
    let newActiveLink = document.querySelector(`[href="#${theid}"]`); 
    if (newActiveLink) {
        newActiveLink.parentElement.classList.add('active');
    }
}

//call the function for each element in the list
myListOfItems.forEach(item => {
    myObserver.observe(item);
});

// Current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();