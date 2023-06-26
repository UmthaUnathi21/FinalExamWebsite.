$(document).ready(function() {
    // DOM Manipulation
    function updateElementText(elementId, newText) {
      const element = document.getElementById(elementId);
      element.textContent = newText;
    }
  
    function toggleElementVisibility(elementId) {
      const element = document.getElementById(elementId);
      element.classList.toggle('hidden');
    }
  
    // API Interactions
    function fetchDataFromAPI() {
      return fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          // Process the data or trigger additional actions
          return data;
        })
        .catch(error => {
          // Handle the error or show appropriate messages
          console.error('API error:', error);
        });
    }
  
    // Data Processing
    function calculateTotalPrice(items) {
      let totalPrice = 0;
      for (let item of items) {
        totalPrice += item.price;
      }
      return totalPrice;
    }
  
    // Event Listeners
    $(document).on('click', '.filter-item', function() {
      const value = $(this).attr('data-filter');
      if (value === 'all') {
        $('.post-box').show('1000');
      } else {
        $('.post-box')
          .hide(1000)
          .filter('.' + value)
          .show('1000');
      }
    });
  
    $(document).on('click', '.filter-item', function() {
      $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
  });
  