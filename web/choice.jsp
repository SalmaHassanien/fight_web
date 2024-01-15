<%-- 
    Document   : choice
    Created on : Dec 9, 2023, 8:08:32 PM
    Author     : ehab
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>    
        <script type="text/javascript" src="js/eAjax.js"></script>                   

    </head>
    <body>
        <SCRIPT TYPE="text/javascript">

            var ajaxpack1 = new ajaxpack();

            function callServlet(serv, choice) {
                var param = "";
                param = addParam(param, "choice", choice);
                ajaxpack1 = new ajaxpack();
                callServer(ajaxpack1, serv, param, updatePage);
            }
            function updatePage() {
                // alert("done");
            }
        </SCRIPT>
        <h2>Choose an option:</h2>

        <button onclick="callServlet('start.jsp', 1)">Servlet 1</button>
        <button onclick="callServlet('start.jsp', 2)">Servlet 2</button>
        <button onclick="callServlet('start.jsp', 3)">Servlet 3</button>

        <script>
            // Function to make an AJAX call to a servlet based on the servlet name
        </script>

    </body>
</html>
