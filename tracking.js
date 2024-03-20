// document.addEventListener('DOMContentLoaded', function() {
//     // Basic structure for user session data
//     let sessionData = {
//         userID: "guest", // Default value, will try to fill in with actual user ID
//         sessionStart: new Date().toISOString(),
//         pagesViewed: [],
//     };

//     // Attempt to capture Shopify customer ID if available
//     if (ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.page.customerId) {
//         sessionData.userID = ShopifyAnalytics.meta.page.customerId;
//     }

//     // Function to record a page view
//     function recordPageView() {
//         // Add current page to the list of pages viewed
//         sessionData.pagesViewed.push({
//             url: window.location.href,
//             timestamp: new Date().toISOString()
//         });

//         // You could send data to your backend here or on session end
//     }

//     // Record the initial page view
//     recordPageView();

//     // Optionally, listen to onbeforeunload or use a heartbeat method to update session data periodically
//     window.addEventListener('beforeunload', function() {
//         sendDataToServer(sessionData); // Replace this with actual AJAX request to send data
//     });

//     function sendDataToServer(data) {
//         // Example POST request with fetch API
//         fetch('YOUR_BACKEND_ENDPOINT_URL', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error));
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(event) {
            const eventData = {
                eventType: 'click',
                timestamp: new Date().toISOString(),
                elementTag: event.target.tagName,
                elementClasses: event.target.className,
                elementId: event.target.id,
                pageUrl: window.location.href
            };
            // Replace this URL with your tracking endpoint
            // fetch('https://yourserver.com/trackEvent', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(eventData),
            // });

            //testing if the tracking.js gets called in Shopify
            alert("This is an alert message!");

        });
    });
});

