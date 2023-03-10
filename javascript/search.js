let autocomplete;

// Initialize the Google Places API autocomplete function
function initAutocomplete() {
  // Set the autocomplete variable
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    { types: ['address'] }
  );

  // Add listener for when a place is selected
  autocomplete.addListener('place_changed', fillInAddress);
}

// Extract the address components and populate the form fields
function fillInAddress() {
  // Get the selected place
  const place = autocomplete.getPlace();

  // Initialize the address components to empty strings
  let streetNumber = '';
  let streetName = '';
  let city = '';
  let state = '';
  let zipCode = '';

  // Extract the address components if available
  if (place.address_components) {
    streetNumber = getComponent(place, 'street_number');
    streetName = getComponent(place, 'route');
    city = getComponent(place, 'locality');
    state = getComponent(place, 'administrative_area_level_1');
    zipCode = getComponent(place, 'postal_code');
  }

  // Check if zip code is 38501
  if (zipCode == 38501) {
    document.getElementById('congrats-box').style.display = 'block';
    document.getElementById('error-box').style.display = 'none';
  } else {
    document.getElementById('congrats-box').style.display = 'none';
    document.getElementById('error-box').style.display = 'block';
  }
}

// Helper function to extract a specific component from a place object
function getComponent(place, component) {
  for (const addressComponent of place.address_components) {
    for (const type of addressComponent.types) {
      if (type === component) {
        return addressComponent.long_name;
      }
    }
  }
  return '';
}

// Handle form submit event
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  fillInAddress();
});
