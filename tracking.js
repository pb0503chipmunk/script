
            //testing if the tracking.js gets called in Shopify
            // alert("This is an alert message!");

            document.addEventListener('DOMContentLoaded', function() {
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
                    const sessionData = {
                        timestamp: new Date().toISOString(),
                        pageName: document.title,
                        deviceType: getDeviceType()
                    };
            
                    // Convert sessionData to a readable string
                    const sessionInfo = `Session Timestamp: ${sessionData.timestamp}\n` +
                                        `Page Name: ${sessionData.pageName}\n` +
                                        `Device Type: ${sessionData.deviceType}`;
            
                    // Display the information in an alert message
                    alert(sessionInfo);
                }
            
                trackVisitorSession();
            });
            