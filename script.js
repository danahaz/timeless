
// Open the contact form modal
function openContactForm() {
 
  document.getElementById("contact-modal").style.display = "flex"; // Show the modal
}
// Close the contact form modal


// Handle form submission (show thank you message and hide form)
// Handle form submission and show thank you message
function handleFormSubmit(event) {
event.preventDefault(); // Prevent form from submitting normally

// Hide the form
document.getElementById("contact-form").style.display = "none";

// Show the thank you message
document.getElementById("thank-you-message").style.display = "block";

// Add the "thank-you-active" class to the modal to trigger styling changes
document.getElementById("contact-modal").classList.add("thank-you-active");
}

function handleformSubmit(event) {
  event.preventDefault(); // Prevent form submission
  
  // Hide the contact form
  document.getElementById('contact-form').style.display = 'none';
  
  // Hide the heading
  document.querySelector('.contact-page h2').style.display = 'none';
  
  // Show the thank-you message
  document.getElementById('thank-you-message').style.display = 'block';
}
// Function to redirect to homepage (optional)
function goBackToHome() {
window.location.href = "homepage.html"; // Replace with your homepage URL
}



// Handle form submission (show thank you message and hide form)
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Add the "thank-you-active" class to the modal to trigger hiding of form elements
  document.getElementById("contact-modal").classList.add("thank-you-active");
  function closeModal() {
const modal = document.getElementById('contact-modal');
modal.style.display = 'none'; // Hide the modal
}
  // Hide the form, submit button, and close button
  document.getElementById("contact-form").style.display = "none"; // Hide the contact form
  document.getElementById("thank-you-message").style.display = "block"; // Show the Thank You message
  document.querySelector(".close").style.display = "none"; // Hide the close button
  document.querySelector(".submit-btn").style.display = "none";
  document.querySelector(".contact-modal-content h2").style.display = "none"; // Hide the submit button
});

// Redirect to home when clicking "Back to Home"
function goBackToHome() {
  window.location.href = "homepage.html"; // Change the URL to your desired page
}

// Function to open the feedback form when the feedback button is clicked
// Function to open the feedback form when the feedback button is clicked
function openFeedbackForm(event) {
event.preventDefault();  // Prevent the default anchor link behavior
document.getElementById("feedbackForm").style.display = "flex"; // Show the modal (feedback form)
}

// Function to close the feedback form (modal)
function closeFeedbackForm() {
document.getElementById("feedbackForm").style.display = "none";  // Hide the modal (feedback form)
}

// On page load, make sure the feedback form is hidden initially
window.onload = function() {
document.getElementById("thankYou").style.display = "none"; 
document.getElementById("feedbackForm").style.display = "none";  // Ensure the feedback form is hidden on page load
};

// Toggle between the Feedback and Thank You tabs
function showTab(tab) {
const allTabs = document.querySelectorAll('.feedback-tab-pane');
allTabs.forEach((tab) => tab.classList.remove('active'));

// Hide close button and text if "thankYou" tab is shown
if (tab === 'thankYou') {
  document.getElementById('feedback-form').style.display = 'none';  // Hide the feedback form
  document.querySelector('.close').style.display = 'none';  // Hide the close button
  document.querySelector('.feedback-container h2').style.display = 'none';  // Hide the heading text
} else {
  document.getElementById('feedback-form').style.display = 'block';  // Show feedback form
  document.querySelector('.close').style.display = 'inline-block';  // Show the close button
  document.querySelector('.feedback-container h2').style.display = 'block';  // Show the heading text
}

// Show the selected tab
document.getElementById(tab).classList.add('active');
}

// Back to the category selection (when back button is clicked)
function backToCategory() {
// Go back to the category selection tab
document.getElementById('feedback-category').style.display = 'block';
document.getElementById('feedback-form').style.display = 'none';
document.getElementById('back-feedback-btn').style.display = 'none';
document.getElementById('submit-feedback-btn').style.display = 'none'; // Hide the back button and submit button
}

// Load the Feedback Form for a selected category (e.g., Jewelry, Accessories, Service)
function loadFeedbackForm(category) {
// Show the feedback form and hide the category prompt
    // Hide the category selection
    document.getElementById("feedback-category").style.display = 'none';
    // Show the feedback form for the selected category
    document.getElementById("feedback-form").style.display = 'block';

    // Hide all category forms
    const forms = document.querySelectorAll('.feedback-category-form');
    forms.forEach((form) => form.style.display = 'none');
    // Show the selected category form
    document.getElementById(`${category}-form`).style.display = 'block';

    // Show the back and submit buttons
    document.getElementById("back-feedback-btn").style.display = 'inline-block';
    document.getElementById("submit-feedback-btn").style.display = 'inline-block';
}

// Handle form submission
function submitFeedback() {
document.getElementById("feedback-category").style.display = 'none';
document.getElementById("feedback-form").style.display = 'none';
document.getElementById("back-feedback-btn").style.display = 'none';
document.getElementById("submit-feedback-btn").style.display = 'none';
document.getElementById("closebtn").style.display = 'none';
// Show the Thank You page and hide the Feedback form (or just show the Thank You tab)
showTab('thankYou');
}


// Function to open the modal when the user clicks the icon
function openModal() {
const modal = document.getElementById('modal');
modal.style.display = 'flex'; // Show the modal with flexbox
}

// Function to close the modal when the user clicks the close button
function closeModal() {
const modal = document.getElementById('modal');
modal.style.display = 'none'; // Hide the modal
}

// Function to switch to the Sign Up form from Log In form
function switchToSignUp() {
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');

signUpForm.style.display = 'block'; // Show the Sign Up form
logInForm.style.display = 'none'; // Hide the Log In form
}

// Function to switch to the Log In form from Sign Up form
function switchToLogin() {
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');

signUpForm.style.display = 'none'; // Hide the Sign Up form
logInForm.style.display = 'block'; // Show the Log In form
}

// Function to toggle the password visibility in the Sign Up and Log In forms

function togglePasswordsi() {
const passwordField = document.getElementById('passwordsi'); // Get the password input field
const toggleButton = document.getElementById('toggleSignUpPassword'); // Get the button

// Create an image element for the eye icon
const img = document.createElement('img');
img.alt = 'Toggle password visibility'; // Accessibility alt text

// Set the size of the image to match the emoji size

// Toggle the password visibility
if (passwordField.type === 'password') {
    passwordField.type = 'text'; // Show the password
    img.src = 'photos/open.png';
    img.style.width = '20px';  // Adjust this value as needed
img.style.height = '12px'; // Adjust this value as needed
// Use the open eye image
} else {
    passwordField.type = 'password'; // Hide the password
    img.src = 'photos/close.png';
    img.style.width = '20px';  // Adjust this value as needed
img.style.height = '12px';
 // Adjust this value as needed
// Use the closed eye image
}

// Clear the existing content and append the image
toggleButton.textContent = ''; // Clear previous text content
toggleButton.appendChild(img); // Add the image to the button
}

function togglePasswordlog() {
const passwordField = document.getElementById('passwordlog'); // Get the password input field
const toggleButton = document.getElementById('toggleLoginPassword'); // Get the button

// Create an image element for the eye icon
const img = document.createElement('img');
img.alt = 'Toggle password visibility'; // Accessibility alt text

// Set the size of the image to match the emoji size

// Toggle the password visibility
if (passwordField.type === 'password') {
    passwordField.type = 'text'; // Show the password
    img.src = 'photos/open.png'; 
    img.style.width = '20px';  // Adjust this value as needed
    img.style.height = '12px';// Use the open eye image
} else {
    passwordField.type = 'password'; // Hide the password
    img.src = 'photos/close.png';
    img.style.width = '20px';  // Adjust this value as needed
    img.style.height = '12px'; // Use the closed eye image
}

// Clear the existing content and append the image
toggleButton.textContent = ''; // Clear previous text content
toggleButton.appendChild(img); // Add the image to the button
}




function searchWebsite() {
const query = document.getElementById('searchInput').value.toLowerCase();
const content = document.body.innerText.toLowerCase(); // Get all the visible text on the page
const resultsDiv = document.getElementById('searchResults'); // The div where search results will be displayed

// Clear previous results
resultsDiv.innerHTML = '';

if (query.trim() === '') {
  return; // Do nothing if the input is empty
}

// Check if the query is in the page content
if (content.indexOf(query) === -1) {
  resultsDiv.innerHTML = 'No results found.';
  return;
}

// Find all elements (optional, can be customized for specific elements like <h1>, <p>, etc.)
const elements = document.querySelectorAll('h1, h2, h3, p, li, span'); // Include any tags you want to search in

// Loop through elements and check if they contain the query
elements.forEach(element => {
  const elementText = element.innerText.toLowerCase();
  if (elementText.includes(query)) {
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `<strong>Found in:</strong> ${element.outerHTML}`;
    resultsDiv.appendChild(resultItem);
  }
});

// If no results found
if (resultsDiv.innerHTML === '') {
  resultsDiv.innerHTML = 'No matching content found.';
}
}


// Sample product data (you would get this dynamically, but here is static data for illustration)
// Example product data
 // Product data
// Product data
// Product data
// Product data
// Product data
const products = {
1: {
  name: 'Solitaire Diamond Studs',
  description: 'A staple piece that never goes out of style',
  price: '$250',
  materials: {
    gold: '14k yellow gold',
    silver: '925 sterling silver',
    'rose-gold': '18k rose gold'
  },
  colors: ['gold', 'silver', 'rose-gold'],
  images: {
    gold: 'photos/earrings 1.png',
    silver: 'photos/earrings 1s.png',
    'rose-gold': 'photos/earrings 1r.png'
  }
},
2: {
  name: 'Moon Earrings',
  description: 'Perfect for a celestial or astrology-inspired collection',
  price: '$300',
  materials: {
    gold: '14k yellow gold',
    silver: '925 sterling silver',
    'rose-gold': '18k rose gold'
  },
  colors: ['gold', 'silver', 'rose-gold'],
  images: {
    gold: 'photos/earrings2-gold.png',
    silver: 'photos/earrings2-silver.png',
    'rose-gold': 'photos/earrings2-rose-gold.png'
  }
}
};

// Get item ID from URL
function getItemIdFromURL() {
const params = new URLSearchParams(window.location.search);
return params.get('item');  // e.g., item=1
}

// Load product details based on item ID
function getItemDetails() {
const itemId = getItemIdFromURL();
if (!itemId || !products[itemId]) {
  alert('Item not found');
  return;
}

const product = products[itemId];

// Set product details
document.getElementById('item-name').textContent = product.name;
document.getElementById('item-description').textContent = product.description;
document.getElementById('item-price').textContent = product.price;

const imageElement = document.getElementById('item-image');
const materialElement = document.getElementById('material');
const colorButtonsContainer = document.getElementById('color-buttons');

// Set default color (gold)
const defaultColor = 'gold';  // Set gold as default color
imageElement.src = product.images[defaultColor];
materialElement.textContent = product.materials[defaultColor];

// Create color buttons dynamically
product.colors.forEach(color => {
  const button = document.createElement('button');
  button.style.backgroundColor = color;
  button.textContent = color.charAt(0).toUpperCase() + color.slice(1); // Capitalize color name
  button.addEventListener('click', function () {
    imageElement.src = product.images[color]; // Change image
    materialElement.textContent = product.materials[color]; // Change material
  });
  colorButtonsContainer.appendChild(button);
});
}

// Initialize page content on load
window.onload = getItemDetails;

// wishlist.js

// Function to add items to the wishlist
function addToWishlist(id, name, price, image) {
  const heartIcon = document.getElementById(`wishlist-heart-${id}`);
  // Get the wishlist from localStorage or initialize as an empty array
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the item already exists in the wishlist
  const itemExists = wishlist.some(item => item.id === id);
  
  if (itemExists) {

return;
}

  // Add item to the wishlist
  wishlist.push({ id, name, price, image });

  // Save the updated wishlist back to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

 
}
// Load the cart from localStorage when the page loads
// Load the cart from localStorage when the page loads

function toggleHeart(itemId) {
  // Get the heart icon element by its ID (e.g., wishlist-heart-1)
  const heartIcon = document.getElementById(`wishlist-heart-${itemId}`);
  
  // Check if the icon currently has the empty heart class
  if (heartIcon.classList.contains('bi-heart')) {
    // Change to a filled heart
    heartIcon.classList.remove('bi-heart');
    heartIcon.classList.add('bi-heart-fill');
  } else {
    // Change to an empty heart
    heartIcon.classList.remove('bi-heart-fill');
    heartIcon.classList.add('bi-heart');
  }
}
// Add to Wishlist and toggle heart icon
// Function to toggle heart icon and add item to wishlist

// Toggle the heart and add/remove item from the wishlist
// Function to update the heart icon on page load
// Function to update the heart icon on page load
// Function to update the heart icon on page load
// Function to update the heart on page load (based on wishlist data in localStorage)
// Function to update the heart on page load (based on wishlist data in localStorage)
function updateHeartOnPageLoad(id) {
  // Retrieve the wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Get the heart icon element by its ID (e.g., wishlist-heart-1)
  const heartIcon = document.getElementById(`wishlist-heart-${id}`);

  // Check if the item is in the wishlist
  const itemExists = wishlist.some(item => item.id === id);

  // If the item exists in the wishlist, fill the heart (❣), otherwise empty it (♡)
  if (itemExists) {
    heartIcon.textContent = "❣";  // Filled heart emoji
  } else {
    heartIcon.textContent = "♡";  // Empty heart emoji
  }
}

// Function to toggle heart and add/remove from wishlist
function toggleHeartAndAddToWishlist(id, name, price, image) {
  // Retrieve the wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Get the heart icon element by its ID (e.g., wishlist-heart-1)
  const heartIcon = document.getElementById(`wishlist-heart-${id}`);

  // Check if the item is already in the wishlist
  const itemExists = wishlist.some(item => item.id === id);

  if (itemExists) {
    // If the item is in the wishlist, remove it
    wishlist = wishlist.filter(item => item.id !== id);

    // Update the heart to empty (♡)
    heartIcon.textContent = "♡";  // Empty heart emoji
  } else {
    // If the item is not in the wishlist, add it
    wishlist.push({ id, name, price, image });

    // Update the heart to filled (❣)
    heartIcon.textContent = "❣";  // Filled heart emoji
  }

  // Save the updated wishlist back to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Call the updateHeartOnPageLoad function when the page loads
window.onload = function() {
  // Update hearts for each item on page load
  updateHeartOnPageLoad(1);  // Example for item with ID 1
  // Call for more items if necessary
};

// Call the updateHeartOnPageLoad function when the page loads





