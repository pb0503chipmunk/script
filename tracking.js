document.addEventListener('DOMContentLoaded', function() {
    // Function to track page views
    function trackPageView() {
        // Retrieve existing page views from localStorage
        let pageViews = JSON.parse(localStorage.getItem('pageViews')) || [];
        
        // Current page info
        const currentPage = {
            title: document.title,
            url: window.location.href,
            timestamp: new Date().toISOString()
        };
        
        // Add current page to the list of pages viewed
        pageViews.push(currentPage);
        
        // Save the updated list back to localStorage
        localStorage.setItem('pageViews', JSON.stringify(pageViews));
        
        // For demonstration, logging the current page view to the console
        console.log("Page viewed:", currentPage);
    }
           //testing if the tracking.js gets called in Shopify
           alert("This is an alert message!");
           
    // Call the function to track the page view
    trackPageView();
});

            //testing if the tracking.js gets called in Shopify
            alert("This is an alert message!");



