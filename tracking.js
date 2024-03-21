
            //testing if the tracking.js gets called in Shopify
            // alert("This is an alert message!");


            document.addEventListener('DOMContentLoaded', function() {
                // Generate or retrieve a unique visitor ID
                function getVisitorId() {
                    let visitorId = localStorage.getItem('visitorId');
                    if (!visitorId) {
                        // Generate a new ID using a simple method: current timestamp + random number
                        visitorId = 'visitor_' + new Date().getTime() + '_' + Math.random().toString(36).substr(2, 9);
                        localStorage.setItem('visitorId', visitorId);
                    }
                    return visitorId;
                }
            
                function getDeviceType() {
                    const ua = navigator.userAgent;
                    if (/android/i.test(ua)) {
                        return 'Android';
                    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
                        return 'iOS';
                    } else if (/Macintosh/.test(ua)) {
                        return 'MacOS';
                    } else if (/Windows/.test(ua)) {
                        return 'Windows';
                    } else {
                        return 'unknown device';
                    }
                }
            
                function trackVisitorSession() {
                    const visitorId = getVisitorId(); // Retrieve or generate a visitor ID
                    const sessionData = {
                        visitorId: visitorId, // Include the visitor ID in the session data
                        timestamp: new Date().toISOString(),
                        pageName: document.title,
                        deviceType: getDeviceType()
                    };
            
                    // Convert sessionData to a readable string
                    const sessionInfo = `Visitor ID: ${sessionData.visitorId}\n` +
                                        `Session Timestamp: ${sessionData.timestamp}\n` +
                                        `Page Name: ${sessionData.pageName}\n` +
                                        `Device Type: ${sessionData.deviceType}`;
            
                    // Display the information in an alert message
                    alert(sessionInfo);
                }
            
                trackVisitorSession();
            });
            