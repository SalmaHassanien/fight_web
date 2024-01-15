<%-- 
    Document   : start
    Created on : Dec 8, 2023, 6:04:36 PM
    Author     : ehab
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
        <%
        String ss = request.getParameter("choice");
        System.out.println("*****************************************************"+ss);
        util.Client client = new  util.Client();
        client.runGame(Integer.valueOf(ss).intValue());
        %>

