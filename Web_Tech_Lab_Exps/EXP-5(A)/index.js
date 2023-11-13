import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarModsServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Car Mods</title></head>");
        out.println("<body class='flex-col'><h1>Car Mods</h1>");
        out.println("<table><tr><th>Car Model</th><th>Modification</th></tr>");
        out.println("<tr><td>Ford Mustang</td><td>Performance Upgrade</td></tr>");
        out.println("<tr><td>Chevrolet Camaro</td><td>Body Kit Installation</td></tr>");
        out.println("<tr><td>Dodge Challenger</td><td>Exhaust System Upgrade</td></tr>");
        out.println("</table></body></html>");
    }
}
